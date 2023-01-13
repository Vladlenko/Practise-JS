// createPerson =============================================================================


function createPerson(name,surname){
    return{
        name: name,
        surname: surname,
        getFullName: function(){ return `${this.surname} ${this.name} ${this.fatherName ? this.fatherName : ''}` }
    }
}

const a = createPerson("Вася", "Пупкин")
const b = createPerson("Анна", "Иванова")
const c = createPerson("Елизавета", "Петрова")

console.log(a.getFullName())
a.fatherName = 'Иванович'
console.log(b.getFullName())


// createPersonClosure =============================================================================


function createPersonClosure(name,surname){
    let age
    let fatherName
    const fullName = `${surname} ${name} ${fatherName}`
    const checkData = (data) => {
        if(typeof data === 'string' && data.charAt(0) == data.charAt(0).toUpperCase() ){
            return data
        }
        if(typeof data === 'number' && data >=1 && data <=100){
            return data
        }
    }
    return {
        getName: () => {return name},
        getSurname: () => {return surname},
        getFatherName: () => {return fatherName},
        getFullName: () => {return fullName},
        getAge: () => {return age},
    
        setName: (newName) => {checkData(newName) ? name = newName : newName},
        setSurname: (newSurname) => {checkData(newSurname) ? surname = newSurname : newSurname},
        setFatherName: (newFatherName) => {checkData(newFatherName) ? fatherName = newFatherName : newFatherName},
        setFullName: (newFullName) => {
            checkData(newFullName.split(' ')[0]) ? surname = newFullName.split(' ')[0]  : newFullName
            checkData(newFullName.split(' ')[1]) ? name = newFullName.split(' ')[1]  : newFullName
            checkData(newFullName.split(' ')[2]) ? fatherName = newFullName.split(' ')[2]  : newFullName
        },
        setAge: (newAge) => {checkData(newAge) ? age = newAge : newAge},
    }
}

const a = createPersonClosure("Вася", "Пупкин")
const b = createPersonClosure("Анна", "Иванова")
console.log(a.getName())
a.setAge(15)
console.log(a.getAge())
a.setAge(150)
console.log(a.getAge())

b.setFullName("Петрова Анна Николаевна")
console.log(b.getFatherName())


// createPersonClosureDestruct =============================================================================


function createPerson(person){
    return{
        name: person.split(' ')[0],
        surname: person.split(' ')[1],
        fatherName: person.split(' ')[2]
    }
}

function createPersonClosureDestruct(person){

    let {surname = 'Фамилия не задана', name = 'Имя не задано', fatherName = 'Отчество не задано', fullName, age = 'Возраст не задан'} = person
    const checkData = (data) => {
        if(typeof data === 'string' && data.charAt(0) == data.charAt(0).toUpperCase() ){
            return data
        }
        if(typeof data === 'number' && data >=1 && data <=100){
            return data
        }
    }
    return {
        getName: () => {return checkData(name)},
        getSurname: () => {return checkData(surname)},
        getFatherName: () => {return checkData(fatherName)},
        getFullName: () => {return fullName = `${surname} ${name} ${fatherName}`},
        getAge: () => {return checkData(age)},
    
        setName: (newName) => {checkData(newName) ? name = newName : newName},
        setSurname: (newSurname) => {checkData(newSurname) ? surname = newSurname : newSurname},
        setFatherName: (newFatherName) => {checkData(newFatherName) ? fatherName = newFatherName : newFatherName},
        setFullName: (newFullName) => {
            checkData(newFullName.split(' ')[0]) ? surname = newFullName.split(' ')[0]  : newFullName
            checkData(newFullName.split(' ')[1]) ? name = newFullName.split(' ')[1]  : newFullName
            checkData(newFullName.split(' ')[2]) ? fatherName = newFullName.split(' ')[2]  : newFullName
        },
        setAge: (newAge) => {checkData(newAge) ? age = newAge : newAge},
    }
}

const a = createPersonClosureDestruct(createPerson("Вася Пупкин"))
const b = createPersonClosureDestruct({name: 'Николай', age: 75})


// isSorted =============================================================================


function isSorted (...arg){

    for (let i = 0; i < arg.length - 1; i ++){
        if( (arg[i] > arg[i+1]) || typeof arg[i] !== 'number' ){
            return false
        }
    }
    return true
}

const a = isSorted(1,2,3,4,5,6,7)
console.log(a)
const b = isSorted(1,2,3,4,-5,6,7)
console.log(b)
const c = isSorted(1,2,3,'str',5,6,7)
console.log(c)


// Test isSorted =============================================================================


function isSorted (...arg){
    let argNum

    while (argNum !== null){
        argNum = prompt('Введите числа, которые хотите добавить в массив')
        if(argNum){
            arg.push(argNum)
        }
    }

    for (let i = 0; i < arg.length - 1; i ++){
        if( (arg[i] > arg[i+1]) || typeof arg[i] === 'number' ){
            return false
        }
    }
    return true
}

isSorted()


// personForm =============================================================================


function createPerson(person){
    return{
        name: person.split(' ')[0],
        surname: person.split(' ')[1],
        fatherName: person.split(' ')[2]
    }
}

function createPersonClosureDestruct(person){

    let {surname = 'Фамилия не задана', name = 'Имя не задано', fatherName = 'Отчество не задано', fullName, age = 'Возраст не задан'} = person
    const checkData = (data) => {
        if(typeof data === 'string' && data.charAt(0) == data.charAt(0).toUpperCase()){
            return data
        }
        if(typeof data === 'number' && data >=1 && data <=100){
            return data
        }
    }
    return {
        getName: () => {return checkData(name)},
        getSurname: () => {return checkData(surname)},
        getFatherName: () => {return checkData(fatherName)},
        getFullName: () => {return fullName = `${surname} ${name} ${fatherName}`},
        getAge: () => {return age},
    
        setName: (newName) => {checkData(newName) ? name = newName : name},
        setSurname: (newSurname) => {checkData(newSurname) ? surname = newSurname : newSurname},
        setFatherName: (newFatherName) => {checkData(newFatherName) ? fatherName = newFatherName : newFatherName},
        setFullName: (newFullName) => {
            checkData(newFullName.split(' ')[0]) ? surname = newFullName.split(' ')[0]  : newFullName
            checkData(newFullName.split(' ')[1]) ? name = newFullName.split(' ')[1]  : newFullName
            checkData(newFullName.split(' ')[2]) ? fatherName = newFullName.split(' ')[2]  : newFullName
        },
        setAge: (newAge) => {checkData(newAge) ? age = newAge : newAge},
    }
}

const b = createPersonClosureDestruct("Анна", "Иванова")
b.setAge(15)
b.setFullName("Петрова Анна Николаевна")


function personForm( parent, person ){

    const form = document.createElement('form')
    parent.append(form)
    Object.assign(form.style, {display: 'flex', flexDirection: 'column', width: '300px', backgroundColor: '#a2cac9'})

    const inputName = document.createElement('input')
    form.appendChild(inputName)
    Object.assign(inputName.style, {margin: '10px'})
    inputName.placeholder = 'Name'
    inputName.value = person.getName()
    inputName.oninput = () => {person.setName(inputName.value)}

    const inputSurname = document.createElement('input')
    form.appendChild(inputSurname)
    Object.assign(inputSurname.style, {margin: '10px'})
    inputSurname.placeholder = 'Surname'
    inputSurname.value = person.getSurname()
    inputSurname.oninput = () => person.setSurname(inputSurname.value)

    const inputFatherName = document.createElement('input')
    form.appendChild(inputFatherName)
    Object.assign(inputFatherName.style, {margin: '10px'})
    inputFatherName.placeholder = 'Fathername'
    inputFatherName.value = person.getFatherName()
    inputFatherName.oninput = () => person.setFatherName(inputFatherName.value)

    const inputAge = document.createElement('input')
    form.appendChild(inputAge)
    Object.assign(inputAge.style, {margin: '10px'})
    inputAge.placeholder = 'Age'
    inputAge.value = person.getAge()
    inputAge.oninput = () => {person.setAge(+inputAge.value)}

    const inputFullName = document.createElement('input')
    form.appendChild(inputFullName)
    Object.assign(inputFullName.style, {margin: '10px'})
    inputFullName.placeholder = 'Full Name'
    inputFullName.value = person.getFullName()
    inputFullName.oninput = () => person.setFullName(inputFullName.value)
}

const f = personForm(document.body, b)


// getSetForm =============================================================================


function getSetForm(parent, obj) {
    const registry = {}
    const objForm = document.createElement('form')
    parent.append(objForm)
    Object.assign(objForm.style, {display: 'flex', flexDirection: 'column', width: '300px', backgroundColor: '#a2cac9'})

    const updateInputs = () => {

        for (const registryKey in registry) {

            const keyToMethod = `get${registryKey}`
            if(obj[keyToMethod]){
                registry[registryKey].value = obj[keyToMethod]()

            } 

        }
    }

    for (const objKey in obj) {

        const getOrSet = objKey.slice(0, 3)
        const objValue = objKey.slice(3, objKey.length)
        const getValue = `get${objValue}`
        const setValue = `set${objValue}`
        
        if (registry[objValue] === undefined) registry[objValue] = document.createElement('input')
        if (!obj[setValue]) registry[objValue].disabled = true

        objForm.appendChild(registry[objValue])
        Object.assign(registry[objValue].style, {margin: '10px'})

        registry[objValue].type = typeof obj[getValue]()
        registry[objValue].placeholder = `${objValue}`
        registry[objValue].oninput = () => registry[objValue].type == 'number' ? obj[setValue](+registry[objValue].value) : obj[setValue](registry[objValue].value)
        registry[objValue].onchange = () => updateInputs()

    }
    console.log(updateInputs())
}












