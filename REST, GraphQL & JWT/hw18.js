// Светофор =======================================================================


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

async function trafficLight(){

    const trafficLights = document.createElement('div')
    document.body.appendChild(trafficLights)
    Object.assign(document.body.style, {display: 'flex', justifyContent: 'center'})

    trafficLights.innerHTML = `<img src="trafficLight/empty.png" style="width:200px">`
    await delay(1000)

    while (true){

        trafficLights.innerHTML = `<img src="trafficLight/red.png" style="width:200px">`
        await delay(3000)

        trafficLights.innerHTML = `<img src="trafficLight/redYellow.png" style="width:200px">`
        await delay(1250)

        trafficLights.innerHTML = `<img src="trafficLight/green.png" style="width:200px">`
        await delay(3000)

        for (let i = 0; i < 3; i ++) {
            trafficLights.innerHTML = `<img src="trafficLight/empty.png" style="width:200px">`
            await delay(500)
            trafficLights.innerHTML = `<img src="trafficLight/green.png" style="width:200px">`
            await delay(500)
        }

        trafficLights.innerHTML = `<img src="trafficLight/yellow.png" style="width:200px">`
        await delay(1250)
    }
}
trafficLight()


// Stage 2 =======================================================================


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

async function trafficLight(parent, redTime, yellowTime, greenTime, prepare){

    const trafficLights = document.createElement('div')
    parent.appendChild(trafficLights)
    Object.assign(document.body.style, {display: 'flex', justifyContent: 'center'})

    trafficLights.innerHTML = `<img src="trafficLight/empty.png" style="width:200px">`
    await delay(1000)

    while (true){

        trafficLights.innerHTML = `<img src="trafficLight/red.png" style="width:200px">`
        await delay(redTime)

        trafficLights.innerHTML = `<img src="trafficLight/redYellow.png" style="width:200px">`
        await delay(yellowTime)

        trafficLights.innerHTML = `<img src="trafficLight/green.png" style="width:200px">`
        await delay(greenTime)

        for (let i = 0; i < 3; i ++) {
            trafficLights.innerHTML = `<img src="trafficLight/empty.png" style="width:200px">`
            await delay(prepare)
            trafficLights.innerHTML = `<img src="trafficLight/green.png" style="width:200px">`
            await delay(prepare)
        }

        trafficLights.innerHTML = `<img src="trafficLight/yellow.png" style="width:200px">`
        await delay(yellowTime)
    }
}
trafficLight(document.body, 3000, 1250, 3000, 500)


// PedestrianTrafficLight =======================================================================


function domEventPromise (element, eventName) {
    return new Promise ( (resolve) => {
        const event = event => {
            element.removeEventListener(eventName, event)
            resolve(event)
        }
        element.addEventListener(eventName, event)
    })
}

async function padestrianTrafficLight (parent, time, buttonTime) {

    const trafficLights = document.createElement('div')
    parent.appendChild(trafficLights)
    Object.assign(document.body.style, {display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'})

    const goButton = document.createElement('button')
    parent.appendChild(goButton)
    goButton.innerText = 'Go!'
    Object.assign(goButton.style, {backgroundColor: '#313131', borderRadius: '50%', width: '50px', height: '50px', color: 'white', cursor: 'pointer'})

    trafficLights.innerHTML = `<img src="trafficLight/stop.png" style="width:200px">`



    while (true) {
        goButton.disabled = true
        Object.assign(goButton.style, {borderColor:'#e50201', color: '#e50201'})
        await delay(buttonTime)
        goButton.disabled = false
        Object.assign(goButton.style, {borderColor:'#bdd909', color: '#bdd909'})

        await Promise.race([domEventPromise(goButton, 'click'), delay(time)])
        trafficLights.innerHTML = `<img src="trafficLight/go.png" style="width:200px">`
        await delay (time)
        trafficLights.innerHTML = `<img src="trafficLight/stop.png" style="width:200px">`
    }
}

padestrianTrafficLight(document.body, 10000, 3000) 


// speedtest =======================================================================


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

async function speedtest(getPromise, count, parallel){

    const start = performance.now()
    for (let countRepeat = 0; countRepeat < count; countRepeat ++) {
        const promiseArray = []

        for (let countPromise = 0; countPromise < parallel; countPromise ++) {
            promiseArray.push(getPromise())
        }
        const result = await Promise.all(promiseArray)
        console.log(result)
    }
    const duration = performance.now() - start
    return {
        'duration': duration,
        'parallelDuration': duration/(count*parallel),
        'paralledSpeed': count*parallel/duration,
        'queryDuration': duration/count,
        'querySpeed': (count*parallel/duration)/count
    }
}
speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then(result => console.log(result))
speedtest(() => delay(1000), 10, 10 ).then(result => console.log(result))


// gql =======================================================================


async function gql (endpoint, query, variables) {

    const querys = await fetch(endpoint,
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                {
                    'query': query,
                    'variables': variables,
                }
            )
        }
        )
        .then (data => data.json())
        return querys
}

;(async () => {
    const catQuery = `query cats($q: String){
                                        CategoryFind(query: $q){
                                            _id name
                                        }
                                    }`
    const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql",  catQuery,  {q: "[{}]"})
    console.log(cats) //список категорий с _id name и всем таким прочим
    
    
    const loginQuery = `query login($login:String, $password:String){
                            	login(login:$login, password:$password)
                        }`
    
    const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery ,{login: "test457", password: "123123"})
    console.log(token)
})()


// jwtDecode =======================================================================


function jwtDecode (token) {

    try {
        const tokenArr = token.split('.')
        const data = atob(tokenArr[1])
        const dataObj = JSON.parse(data)
    
        return dataObj
    }
    catch {
        return undefined
    }

}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token)) 
//{
//  "sub": {
//    "id": "632205aeb74e1f5f2ec1a320",
//    "login": "test457",
//    "acl": [
//      "632205aeb74e1f5f2ec1a320",
//      "user"
//    ]
//  },
//  "iat": 1668272163
//}

try {
    console.log(jwtDecode())         //undefined
    console.log(jwtDecode("дичь"))   //undefined
    console.log(jwtDecode("ey.ey.ey"))   //undefined
    
    console.log('до сюда доработало, а значит jwtDecode не матерился в консоль красным цветом')
}
finally{
    console.log('ДЗ, видимо, окончено')
}

