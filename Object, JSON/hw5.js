// 3 persons ==============================================================================


let personOne={
    name: '',
    surname: '',
}

let personTwo={
    name:'',
    surname:''
}

let personThree={
    name:'',
    surname:''
}


// different fields ==============================================================================


let personOne={
    name: '',
    surname: '',
    age: '',
    fathername: '',
    sex: ''
}

let personTwo={
    name:'',
    surname:'',
    'age': '',
    'fathername': '',
    'sex': ''
}

let personThree={
    name:'',
    surname:'',
    age:
    '',
    fathername:
    '',
    sex:
    ''
}


// fields check ==============================================================================


let personOne={
    name: 'Vlad',
    surname: 'Stasenko',
    age: '27',
    fathername: 'Andriyovich',
    sex: ''
}

if ('sex' in personOne){
    alert(personOne.sex + ' Необязательное поле')
}
// либо =============================================

if (typeof personOne.sex === 'string'){
    alert(personOne.sex + ' Необязательное поле')
}

let personTwo={
    name:'Kate',
    surname:'Stasenko',
    'age': '',
    'fathername': 'Andriivna',
    'sex': 'woman'
}

if('age' in personTwo){
    alert(personTwo.age + ' Необязательное поле')
}
// либо =============================================

if(typeof personTwo.age === 'string'){
    alert(personTwo.age + ' Необязательное поле')
}

let personThree={
    name:'Daniel',
    surname:'Deli',
    age:
    '27',
    fathername:
    '',
    sex:
    'man'
}

if ('fathername' in personThree){
    alert(personThree.fathername + ' Необязательное поле')
    }
// либо =============================================

if(typeof personThree.fathername === 'string'){
    alert(personThree.fathername + ' Необязательное поле')
}


// array of persons ==============================================================================


let persons = [

    personOne={
        name: '',
        surname: '',
        age: '',
        fathername: '',
        sex: ''
    },

    personTwo={
        name:'',
        surname:'',
        'age': '',
        'fathername': '',
        'sex': ''
    },

    personThree={
        name:'',
        surname:'',
        age:
        '',
        fathername:
        '',
        sex:
        ''
    }
]


// loop of persons ==============================================================================


let persons = [

    personOne={
        name: '',
        surname: '',
        age: '',
        fathername: '',
        sex: ''
    },

    personTwo={
        name:'',
        surname:'',
        'age': '',
        'fathername': '',
        'sex': ''
    },

    personThree={
        name:'',
        surname:'',
        age:
        '',
        fathername:
        '',
        sex:
        ''
    }
]

for (let key in persons){
    console.log(persons[key]);
}

// либо =============================================

let persons = [

    personOne={
        name: '',
        surname: '',
        age: '',
        fathername: '',
        sex: ''
    },

    personTwo={
        name:'',
        surname:'',
        'age': '',
        'fathername': '',
        'sex': ''
    },

    personThree={
        name:'',
        surname:'',
        age:
        '',
        fathername:
        '',
        sex:
        ''
    }
]

for (let i = 0; i<persons.length; ++i){
    console.log(persons[i]);
}


// loop of name and surname ==============================================================================


let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: '',
        fathername: '',
        sex: ''
    },

    personTwo={
        name:'Kate',
        surname:'Stasenko',
        'age': '',
        'fathername': '',
        'sex': ''
    },

    personThree={
        name:'Sveta',
        surname:'Stasenko',
        age:
        '',
        fathername:
        '',
        sex:
        ''
    }
]

for (let key in persons){
    console.log(persons[key].name +' '+ persons[key].surname);
}


// loop of loop of values ==============================================================================


let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Stasenko',
        'age': '27',
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Stasenko',
        age:
        '48',
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]

for(let i=0; i<(persons.length); i++ ){
    for(let key in persons[i]){
        console.log(persons[i][key])
    }
}


// fullName ==============================================================================


let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Stasenko',
        'age': '27',
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Stasenko',
        age:
        '48',
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]

for(let i=0; i<(persons.length); i++ ){
    persons[i].fullName = (persons[i].name + ' ' + persons[i].surname + ' ' + persons[i].fathername)
    console.log(persons[i])
}


// serialize ==============================================================================


let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Stasenko',
        'age': '27',
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Stasenko',
        age:
        '48',
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]
let json = JSON.stringify(persons)
console.log(json)


// deserialize ==============================================================================


let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Stasenko',
        'age': 27,
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Stasenko',
        age:
        48,
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]

let json = JSON.stringify(persons)
let personFour = {"name": "Andrey", "surname": "Stasenko", "age": 48, "fathername": "Anatoliiovych", "sex": "man"}
json= JSON.parse(persons.push(personFour))
json=JSON.stringify(persons)
console.log(persons)


// HTML ==============================================================================


let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Yancheva',
        'age': 27,
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Maksimenko',
        age:
        48,
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]

let json = JSON.stringify(persons)
let personFour = {"name": "Andrey", "surname": "Stasenko", "age": 48, "fathername": "Anatoliiovych", "sex": "man"}
json= JSON.parse(persons.push(personFour))
json=JSON.stringify(persons)

var str = "<table border='1'>"
for (let i=0;i<persons.length;i++){
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)


// HTML optional fields ==============================================================================


let personFour
let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Yancheva',
        'age': 27,
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Maksimenko',
        age:
        48,
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]

let json = JSON.stringify(persons)
personFour = {"name": "Andrey", "surname": "Stasenko", "age": 48, "fathername": "Anatoliiovych", "sex": "man"}
json= JSON.parse(persons.push(personFour))
json= JSON.stringify(persons)

var str = "<table border='1'>"

for(let key in persons[0]){
    str+= `<td>${key}</td>`
    }

for (let i=0;i<persons.length;i++){
    str += `<tr><td>${persons[i].name}</td>
                <td>${persons[i].surname}</td>
                <td>${persons[i].age}</td>
                <td>${persons[i].fathername}</td>
                <td>${persons[i].sex}</td>
            </tr>`
}
str += "</table>"

document.write(str)


// HTML tr color ==============================================================================


let personFour
let persons = [

    personOne={
        name: 'Vlad',
        surname: 'Stasenko',
        age: 27,
        fathername: 'Andriyovich',
        sex: 'man'
    },

    personTwo={
        name:'Kate',
        surname:'Yancheva',
        'age': 27,
        'fathername': 'Andriivna',
        'sex': 'woman'
    },

    personThree={
        name:'Sveta',
        surname:'Maksimenko',
        age:
        48,
        fathername:
        'Oleksiivna',
        sex:
        'woman'
    }
]

let json = JSON.stringify(persons)
personFour = {"name": "Andrey", "surname": "Stasenko", "age": 48, "fathername": "Anatoliiovych", "sex": "man"}
json= JSON.parse(persons.push(personFour))
json= JSON.stringify(persons)

var str = "<table border='1'>"

for(let key in persons[0]){
    str+= `<td>${key}</td>`
    }

for (let i=0;i<persons.length;i++){
    str += `<tr style="background: ${i%2?'#f5f5dc':'white'}" >
                <td>${persons[i].name}</td>
                <td>${persons[i].surname}</td>
                <td>${persons[i].age}</td>
                <td>${persons[i].fathername}</td>
                <td>${persons[i].sex}</td>
            </tr>`
}
str += "</table>"

document.write(str)


// HTML th optional ==============================================================================


let personOne = {
    name: 'Vlad',
    surname: 'Stasenko',
    age: 27,
    fathername: 'Andriyovich',
    sex: 'man',
    car:'BMW',
    married: true
}

let personTwo = {
    name:'Kate',
    surname:'Yancheva',
    'fathername': 'Andriivna',
    'sex': 'woman'
}

let personThree = {
    name:'Sveta',
    surname:'Maksimenko',
    age:
    48,
    fathername:
    'Oleksiivna',
    sex:
    'woman',
    married: false
}

let personFour

let persons = [personOne, personTwo, personThree]



let json = JSON.stringify(persons)
personFour = {"name": "Andrey", "surname": "Stasenko", "age": 48, "fathername": "Anatoliiovych", "sex": "man"}
json= JSON.parse(persons.push(personFour))
json= JSON.stringify(persons)



let keys = Object.keys(persons.reduce(function(keysPerson, obj){return Object.assign(keysPerson, obj);},0))


let str = "<table border='1'>"


for(let i=0; i<keys.length; ++i){
    str += `<th>${keys[i]}</th>`
}
for(let j=0; j<persons.length; ++j){
    str+='<tr>'
for(k=0; k<keys.length; k++){
    str+=`<td style="background: ${j%2?'#f5f5dc':'white'}"> ${
(persons[j][keys[k]]) == false? 'Не в браке':
(persons[j][keys[k]]) == true? 'В браке' :
(persons[j][keys[k]]) == undefined? 'Поле не заданно': (persons[j][keys[k]]) 

} </td>`

}
    str+='</tr>'
}

str += "</table>"
document.write(str)


// Задание на синий пояс ==============================================================================


var someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
                    tagName: "tr",
                    subTags: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        }
                    ]
        }
    ],
    attrs: 
    {
        border: 1,
    },
}

let strTop = `<${someTree.tagName}`
let attrs = Object.keys(someTree.attrs)
let values = Object.values(someTree.attrs)


for (let i=0; i<attrs.length; i++){
    strTop= strTop + ' ' + attrs[i] + '=' + values[i]
}
strTop = strTop + ">"


for ( j=0; j< someTree.subTags.length; j++){
    let openTR = '<'+ someTree.subTags[j].tagName + '>'
    let closeTR ='</'+ someTree.subTags[j].tagName + '>'
    strTop = strTop + openTR

    for(k=0; k<someTree.subTags[j].subTags.length; k++){
        let openTD = '<'+someTree.subTags[j].subTags[k].tagName+'>'
        let text = someTree.subTags[j].subTags[k].text
        let closeTD = '</'+someTree.subTags[j].subTags[k].tagName+'>'
        strTop=strTop+openTD+text+closeTD
}
    strTop= strTop+closeTR
}
strTop=strTop+`</${someTree.tagName}>`

console.log(strTop)


// destruct array ==============================================================================


let arr = [1,2,3,4,5, "a", "b", "c"]

let [odd1,even1,odd2,even2,odd3,...words] = arr

console.log(odd1)
console.log(even1)
console.log(odd2)
console.log(even2)
console.log(odd3)
console.log(words)


// destruct string ==============================================================================


let arr = [1, "abc"]

let [number, [s1,s2,s3]] = arr

console.log(number)
console.log(s1)
console.log(s2)
console.log(s3)


// destruct 2 ==============================================================================


let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}

let {children: [{name: name1}, {name: name2}]} = obj

console.log(name1)
console.log(name2)


// destruct 3 ==============================================================================


let arr = [1,2,3,4, 5,6,7,10]

let ObjfromArr = {...arr}
let ObjFromArr2 = {...ObjfromArr, length: arr.length}
let {0: a, 1: b, length: length} = ObjFromArr2

console.log(a)
console.log(b)
console.log(length)


// ============================================================================================================================================================

























