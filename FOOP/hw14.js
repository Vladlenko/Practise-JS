// Person Constructor ================================================================================================


function Person(name,surname){
    
    this.name = name
    this.surname = surname
    this.getFullName = () => { return `${this.surname} ${this.name} ${this.fatherName ? this.fatherName : ''}` }

}

const a = new Person("Вася", "Пупкин")
const b = new Person("Анна", "Иванова")
const c = new Person("Елизавета", "Петрова")

console.log(a.getFullName())
a.fatherName = 'Иванович'

console.log(b.getFullName())


// Person Prototype ================================================================================================


function createPerson (name,surname) {
    return createPerson.prototype = {
        name: name,
        surname: surname,
        getFullName: () => { return `${surname} ${name} ${this.fatherName ? this.fatherName : ''}` }
    }
}

const a = createPerson("Вася", "Пупкин")
const b = createPerson("Анна", "Иванова")
const c = createPerson("Елизавета", "Петрова")

console.log(a.getFullName())
a.fatherName = 'Иванович'

console.log(b.getFullName())


// Store ================================================================================================

// Задание находится в домашней работе по Redux


// Password ================================================================================================


function Password (parent,open) {

    this.passwordInput = document.createElement('input')
    parent.appendChild(this.passwordInput)
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
    console.log(this)
}

const p = new Password (document.body, false)
p.onChange = data => console.log(data)
p.onOpenChange = open => console.log(open)

p.setValue('qwerty')
console.log(p.getValue())

p.setOpen(false)
console.log(p.getOpen())


// LoginForm ================================================================================================


function Password (parent,open) {

    this.passwordInput = document.createElement('input')
    parent.appendChild(this.passwordInput)
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
    console.log(this)
}

function makeLogin (parent) {

    const p = new Password (document.body, false)

    Object.assign(parent.style, {display: 'grid', justifyItems: 'center'})

    const loginInput = document.createElement('input')
    parent.prepend(loginInput)
    loginInput.placeholder = 'Login'

    const logInButton = document.createElement('button')
    parent.appendChild(logInButton)
    Object.assign(logInButton.style, {width: '50px', height: '25px', marginTop: '5px'})
    logInButton.innerText = 'Login'

    logInButton.disabled = loginInput.value === '' && p.passwordInput.value === '' ? true : false

    p.onChange = data => {
        logInButton.disabled = data === '' ? true : false
    }
    loginInput.oninput = data => {
        data = loginInput.value
        logInButton.disabled = data === '' ? true : false
    }
}
const l = makeLogin(document.body)


// LoginForm Constructor ================================================================================================


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
    Object.assign(this.formButton.style, {width: '50px', marginBottom: '5px'})

    this.formButton.disabled = p.passwordInput.value === '' && l.loginInput.value === '' ? true : false
    p.onChange = data => this.formButton.disabled = data === ''? true : false
    l.onChange = data => this.formButton.disabled = data === ''? true : false
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
    console.log(this)
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
    console.log(this)
}
const f = new Form (document.body)


// Password Verify ================================================================================================


function Password (parent,open) {

    this.passwordInput = document.createElement('input')
    parent.appendChild(this.passwordInput)
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
    console.log(this)
}

function verifyPassword (parent, open) {
    const p = new Password(parent, open)
    const v = new Password(parent)

    v.passwordInput.type = 'password'
    p.passwordInput.style.marginBottom = '5px'
    parent.removeChild(v.openInput)

    open ? v.passwordInput.style.display = 'none' : v.passwordInput.style.display = 'block'

    p.onOpenChange = open => {
        open ? v.passwordInput.style.display = 'none' : v.passwordInput.style.display = 'block'
    }

    p.onChange = mainData => {
        if (mainData == '') p.passwordInput.style.background = 'white' && v.setValue('')
        v.onChange = checkData => {
            checkData === mainData ? p.passwordInput.style.background = '#98FB98' : p.passwordInput.style.background = '#E9967A'
        }
    }
}
const verify = verifyPassword(document.body, false)




