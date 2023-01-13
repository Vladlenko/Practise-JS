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