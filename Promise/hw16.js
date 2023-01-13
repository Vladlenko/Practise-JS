// fetch basic + fetch improved ===========================================================================================================


function jsonToTable (parent, json) {

    const jsonTable = document.createElement('table')
    parent.append(jsonTable)
    Object.assign(jsonTable.style, {border: 'dotted', borderLeft: 'solid'})

    for (let key in json) {

        const jsonTableTr = document.createElement('tr')
        jsonTable.appendChild(jsonTableTr)

        const jsonTableTdTittle = document.createElement('td')
        jsonTableTr.appendChild(jsonTableTdTittle).innerText = key
        Object.assign(jsonTableTdTittle.style, {background: 'black', color: 'white'})

        const jsonTableTdContent = document.createElement('td')
        jsonTableTr.appendChild(jsonTableTdContent)
        Object.assign(jsonTableTdContent.style, {borderBottom: 'dotted'})
        


        if (typeof json[key] === 'string' && json[key].includes('https://swapi.dev/api/')) {
            const tdButton = document.createElement('button')
            jsonTableTdContent.appendChild(tdButton).innerText = json[key]
            Object.assign(tdButton.style, {background: 'black', color: 'yellow', borderColor: 'yellow'})

            tdButton.onclick = () => {
                fetch(`${json[key]}`)
                .then(res => res.json())
                .then(data => jsonToTable(jsonTableTdContent, data))
            }
        }

        else if (typeof json[key] === 'object') {

            for (let i = 0; i < json[key].length; i ++) {
                const tdButton = document.createElement('button')
                jsonTableTdContent.appendChild(tdButton).innerText = json[key][i]
                Object.assign(tdButton.style, {background: 'black', color: 'yellow', borderColor: 'yellow'})

                tdButton.onclick = () => {
                    fetch(`${json[key][i]}`)
                    .then(res => res.json())
                    .then(data => jsonToTable(jsonTableTdContent, data))
                }
            }
        }

        else {
            jsonTableTdContent.innerText = json[key]
        }
    }

}

fetch('https://swapi.dev/api/people/1/')
.then(res => res.json())
.then(luke => jsonToTable(document.body, luke))


// race ===========================================================================================================


function delay (ms) {
    return new Promise ( (resolve, reject) => {
            setTimeout( () => resolve('myDelay'), Math.random()*ms)
    })
}

const myDelay = delay(1000)
const myFetch = fetch('https://swapi.dev/api/people/1/')

Promise.race([myDelay,myFetch]).then((who) => console.log(who))


// Promisify: confirm ===========================================================================================================


function confirmPromise(text){
    return new Promise( (resolve, reject) => {
            confirm(text) ? resolve() : reject()
    })
}
confirmPromise('Промисы это сложно?').then(() => console.log('не так уже и сложно'),
() => console.log('respect за усидчивость и внимательность'))


// Promisify: prompt ===========================================================================================================


function promptPromise(text){
    const promptVal = prompt(text)
    return new Promise ( (resolve, reject) => {
            promptVal ? resolve(promptVal) : reject()
    })
}
promptPromise("Как тебя зовут?").then(name => console.log(`Тебя зовут ${name}`), 
() => console.log('Ну зачем морозиться, нормально же общались'))


// Promisify: LoginForm ===========================================================================================================


function Form (parent) {

    this.mainForm = document.createElement('form')
    parent.append(this.mainForm)
    Object.assign(this.mainForm.style, {display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px'})

    this.formElementsPlace = document.createElement('div')
    this.mainForm.append(this.formElementsPlace)
    Object.assign(this.formElementsPlace.style, {display: 'flex', flexDirection: 'column', width: '100%'})

    const p = new Password (this.formElementsPlace, false)
    const l = new Login (this.formElementsPlace)

    this.formButton = document.createElement('button')
    this.mainForm.append(this.formButton)
    this.formButton.innerText = 'Login'
    this.formButton.type = 'button'
    Object.assign(this.formButton.style, {width: '50px', marginBottom: '5px'})

    this.formButton.disabled = p.passwordInput.value === '' && l.loginInput.value === '' ? true : false
    p.onChange = data => this.formButton.disabled = data === ''? true : false
    l.onChange = data => this.formButton.disabled = data === ''? true : false

    this.getData = () => {
            return {
                    login: l.getValue(),
                    password: p.getValue()
            }
    }

    this.formButton.onclick = () => this.getData()


    console.log(this)
}

function Password (parent,open) {

    this.passwordInput = document.createElement('input')
    parent.appendChild(this.passwordInput)
    this.passwordInput.placeholder = 'Password'
    this.passwordInput.type = open ? 'text' : 'password'

    this.openInput = document.createElement('input')
    parent.appendChild(this.openInput)
    this.openInput.type = 'checkBox'

    this.setValue = newValue => this.passwordInput.value = newValue
    this.getValue = () => {
        return this.passwordInput.value
    }

    this.setOpen = newOpen => {
        newOpen = this.openInput.checked
        this.passwordInput.type = newOpen ? 'text' : 'password'
    }
    this.getOpen = () => {
        return this.openInput.checked
    }

    this.passwordInput.oninput = () => {
        if (typeof this.onChange === 'function') {
            this.onChange(this.getValue())
        }
    }

    this.openInput.onchange = () => {
        if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(this.getOpen())
        }
            this.getOpen(this.setOpen())
    }
}

function Login (parent) {

    this.loginInput = document.createElement('input')
    parent.prepend(this.loginInput)
    this.loginInput.placeholder = 'Login'
    Object.assign(this.loginInput.style, {marginBottom: '5px'})

    this.setValue = newValue => this.loginInput.value = newValue
    this.getValue = () => {
        return this.loginInput.value
    }
    this.loginInput.oninput = () => {
        if (typeof this.onChange === 'function') {
            this.onChange(this.getValue())
        }
    }
}

function loginPromise(parent){
    const f = new Form(parent, true)

    return new Promise ( (resolve, reject) => {
            f.formButton.onclick = () => resolve(f.getData())
    })
}


loginPromise(document.body).then(({login, password}) => console.log(`Вы ввели ${login} и ${password}`))

