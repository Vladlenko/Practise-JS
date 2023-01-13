// Chat =============================================================================================


function jsonPost(url, data)
{
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();   
        x.onerror = () => reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
                resolve(JSON.parse(x.responseText))
            }
            else if (x.status != 200){
                reject(new Error('status is not 200'))
            }
        }
    })
}

function createMessanger (parent) {

    //stage 1 ============================================

    const fieldsContainer = document.createElement('div')
    parent.prepend(fieldsContainer)

    const nickField = document.createElement('input')
    fieldsContainer.append(nickField)
    nickField.placeholder = 'Your nick'

    const messageField = document.createElement('input')
    fieldsContainer.append(messageField)
    messageField.placeholder = 'Your message'

    const sendButton = document.createElement('button')
    fieldsContainer.append(sendButton)
    sendButton.innerText = 'SEND'

    const allMessages = document.createElement('span')
    fieldsContainer.append(allMessages)

    const messageCloud = document.createElement('div')
    parent.append(messageCloud)

    function sendMessage (nick, message) {
        jsonPost('http://students.a-level.com.ua:10012', {func: 'addMessage', nick: nick, message: message})
        .then(res => allMessages.innerText = `Всего сообщений: ${res.nextMessageId}`)
    }

    sendButton.addEventListener('click', () => {
        sendMessage(nickField.value, messageField.value)
        getMessages(id)
    })

    //stage 2 - 3 ================================================================================================
    let id = 0

    function getMessages () {
        jsonPost('http://students.a-level.com.ua:10012', {func: "getMessages", messageId: id})
        .then(res => {

            for (messageData of res.data) {
                const messageDataPlace = document.createElement('div')
                messageCloud.prepend(messageDataPlace)
                messageDataPlace.innerText = `${messageData.nick}: ${messageData.message}`

                const messageTime = document.createElement('span')
                messageDataPlace.append(messageTime)
                Object.assign(messageTime.style, {fontSize: '10px', color: 'grey', marginLeft: '5px'})
                messageTime.innerText = new Date(messageData.timestamp).toLocaleString()

                id = res.nextMessageId
            }
        })
    }
    getMessages()

    //stage 4 ================================================================================================
    
    setInterval(()=> getMessages(), 2000)

}

createMessanger(document.body)


//stage 5-6 ================================================================================================


async function jsonPost(url, data) {
    try {
        const res = await fetch(url, {method: 'POST', body: JSON.stringify(data)})
        const json = await res.json()
        return json
    }
    catch {
        alert('Error')
    }
}

function createMessanger (parent) {

    const fieldsContainer = document.createElement('div')
    parent.prepend(fieldsContainer)

    const nickField = document.createElement('input')
    fieldsContainer.append(nickField)
    nickField.placeholder = 'Your nick'

    const messageField = document.createElement('input')
    fieldsContainer.append(messageField)
    messageField.placeholder = 'Your message'

    const sendButton = document.createElement('button')
    fieldsContainer.append(sendButton)
    sendButton.innerText = 'SEND'

    const allMessages = document.createElement('span')
    fieldsContainer.append(allMessages)

    const messageCloud = document.createElement('div')
    parent.append(messageCloud)

    async function sendMessage (nick, message) {
        const res = await jsonPost('http://students.a-level.com.ua:10012', {func: 'addMessage', nick: nick, message: message})
        allMessages.innerText = `Всего сообщений: ${res.nextMessageId}`
        return res
    }

    let id = 0

    async function getMessages () {
        const res = await jsonPost('http://students.a-level.com.ua:10012', {func: "getMessages", messageId: id})

            for (messageData of res.data) {
                const messageDataPlace = document.createElement('div')
                messageCloud.prepend(messageDataPlace)
                messageDataPlace.innerText = `${messageData.nick}: ${messageData.message}`

                const messageTime = document.createElement('span')
                messageDataPlace.append(messageTime)
                Object.assign(messageTime.style, {fontSize: '10px', color: 'grey', marginLeft: '5px'})
                messageTime.innerText = new Date(messageData.timestamp).toLocaleString()

                id = res.nextMessageId
            }
            return res
    }

    async function sendAndCheck () {
        await sendMessage(nickField.value, messageField.value)
        await getMessages()
    }

    sendButton.addEventListener('click', sendAndCheck)

    async function delay (ms) {
        return await new Promise(resolve => setInterval(resolve,ms) )
    }

    async function checkLoop() {
        while (true) {
            await delay(2000)
            getMessages()
        }
    }
    checkLoop()
    getMessages()
}

createMessanger(document.body)


// SWAPI Links =============================================================================================

//Последовательные запросы =================================================================================

async function swapiLinks(url) {

    const data = await fetch(url)
    const people = await data.json()

    for (let key in people) {

        if (people[key].includes('https://swapi.dev/api/')) {
            const link = await fetch(people[key])
            const dataFromLink = await link.json()
            people[key] = dataFromLink
        }

        else if (typeof people[key] === 'object') {
            for (let i = 0; i < people[key].length; i++) {
                if (typeof people[key][i] === 'string' && people[key][i].includes('https://swapi.dev/api/')) {
                    const link = await fetch(people[key][i])
                    const dataFromLink = await link.json()
                    people[key][i] = dataFromLink
                }
            }
        }
    }
    return people
}

swapiLinks('https://swapi.dev/api/people/20')
    .then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))

//Параллельные запросы =================================================================================

    async function swapiLinks(url) {
        const swapiResp = await fetch(url)
        const swapiObj = await swapiResp.json()
        const linksArr = []
    
        for (let key in swapiObj) {
            if (typeof swapiObj[key] === 'string' && swapiObj[key].includes('https://swapi.dev/api/')) {
                linksArr.push(
                    fetch(swapiObj[key])
                       .then(res => res.json())
                       .then(data => swapiObj[key] = data)
                )
            }
            if (typeof swapiObj[key] === 'object') {
                for (let i = 0; i < swapiObj[key].length; i++) {
                    if (typeof swapiObj[key][i] === 'string' && swapiObj[key][i].includes('https://swapi.dev/api/')) {
                        linksArr.push(
                            fetch(swapiObj[key][i])
                               .then(res => res.json())
                               .then(data => swapiObj[key][i] = data)
                        )
                    }
                }
            }
        }
        await Promise.all(linksArr)
        return swapiObj
    }
    
    swapiLinks("https://swapi.dev/api/people/20/")
    .then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))


    // domEventPromise =============================================================================================


    const knopka = document.createElement('button')
    document.body.appendChild(knopka)
    knopka.innerText = 'Knopka'
    
    function domEventPromise(element, eventName){
        function executor(resolve){
            const clickEvent = event => {
                resolve(event)
                element.removeEventListener(eventName, clickEvent)
            }
            element.addEventListener(eventName, clickEvent)
        }
        return new Promise(executor)
    }
    
    domEventPromise(knopka, 'click').then( e => console.log('event click happens', e))