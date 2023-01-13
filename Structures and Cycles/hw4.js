// html tree ================================================================================


let body = {
    tagName: 'body',
    subTags: [{
        tagName: 'div',
        subTags: [{
            tagName: 'span',
            text: 'Enter a data please:'
        },
        {
            tagName: 'input',
            attrs: [{
                type: 'text',
                id: 'name'
            }]
        },
        {
            tagtName:'input',
            attrs: [{
                type: 'text',
                id: 'surname'
            }]
        }
        ]
    },
    {
        tagName: 'br/'
    },
    {
        tagName: 'div',
        subTags: [{
            tagName: 'button',
            text: 'OK',
            attrs: [{
                id: 'ok'
            }]
        },
            {
                tagName: 'button',
                text: 'cancel',
                attrs: [{
                    id: 'cancel'
                }]
            }]
    }
    ]
}
console.log(body.subTags[2].subTags[1].text)
console.log(body.subTags[0].subTags[2].attrs[0].id)


// declarative fields ================================================================================


var notebook = {
    brand: prompt('Введите бренд ноутбука'),
    type:  prompt('Введите тип ноутбука'),
    model: prompt('Введите модель ноутбука'),
    ram: +prompt('Введите RAM ноутбука'),
    size: +prompt('Введите размер диагонали ноутбука'),
    weight: +prompt('Введите вес ноутбука'),
    resolution: {
        width: +prompt('Введите ширину ноутбука'),
        height: +prompt('Введите высоту ноутбука'),
    },
};

var phone = {
    brand: prompt('Введите бренд смартфона'),
    model: prompt('Введите модель смартфона'),
    ram: +prompt('Введите RAM смартфона'),
    color: prompt('Введите высоту смартфона'),
};

var person = {
    name: prompt('Введите имя человека'),
    surname: prompt('Введите фамилию человека'),
    married: confirm('В браке?'),
}

console.log(notebook)
console.log(phone)
console.log(person)


// object links ================================================================================


var notebook = {
    brand: prompt('Введите бренд ноутбука'),
    type:  prompt('Введите тип ноутбука'),
    model: prompt('Введите модель ноутбука'),
    ram: +prompt('Введите RAM ноутбука'),
    size: +prompt('Введите размер диагонали ноутбука'),
    weight: +prompt('Введите вес ноутбука'),
    resolution: {
        width: +prompt('Введите ширину ноутбука'),
        height: +prompt('Введите высоту ноутбука'),
    },
    owner: person
};

var phone = {
    brand: prompt('Введите бренд смартфона'),
    model: prompt('Введите модель смартфона'),
    ram: +prompt('Введите RAM смартфона'),
    color: prompt('Введите высоту смартфона'),
    owner: person
};

var person = {
    name: prompt('Введите имя человека'),
    surname: prompt('Введите фамилию человека'),
    married: confirm('В браке?'),
    smartphone: phone,
    laptop: notebook
}

notebook.owner = person
phone.owner = person
person.smartphone = phone
person.laptop = notebook


console.log(notebook)
console.log(phone)
console.log(person)
console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone)


// imperative array fill 3 ================================================================================


let Arr = []
Arr[0]= prompt('Введите первое значение')
Arr[1]= prompt('Введите второе значение')
Arr[2]= prompt('Введите третье значение')
console.log(Arr)


// while confirm ================================================================================


let stop
while (stop!==false) {
stop = confirm('Хотите продолжить ?')
}
console.log(stop)


// array fill ================================================================================


let arr = []
let arrPush
while (arrPush!==null){
    arrPush = prompt('Введите что нибудь!')
    if (arrPush){
        arr.push(arrPush)
    }
}
console.log(arr)


// array fill nopush ================================================================================


let arr = []
let arrPush
while (arrPush!==null){
    arrPush = prompt('Введите что нибудь!')
    if (arrPush){
        arr[arr.length]=arrPush
    }
}
console.log(arr)


// infinite probability ================================================================================


let iterationNum=0

while(true){
    let numRandom = Math.random()
    iterationNum++

    if (numRandom>0.9){
        alert("Иттерация номер: "+ iterationNum + "/  " + "Число: " + numRandom )
        break
    }
}


// empty loop ================================================================================


let arr = []
let arrPush
while (arrPush==null){
    arrPush = prompt('Введите что нибудь!')
    if (arrPush){
        arr[arr.length]=arrPush
    }
}
console.log(arr)


// progression sum ================================================================================


let result = 0
let lastNum = prompt('Введите последнее число арифметической прогрессии')

for(let i = 1; i<=lastNum; i+=3){
result=result+i
}
alert("Cумма арифметической прогрессии: "+result)


// chess one line ================================================================================


let string = ""
let symbolOne = " "
let symbolTwo = "#"

for(i=0; i<=10; i++){
    if(i%2==0){
        string+=symbolOne
    }
    else{
        string+=symbolTwo
    }
}
console.log(string)


// numbers ================================================================================


for(i=0; i<10; i++){
    let string=""

for(j=0; j<10; j++){
        string+=j
    }
console.log(string)
}

// ||

let string = ""
for (j=0;j<10;j++){
	string += '\n'

for(i=0;i<10;i++){
    string+=i
    }
}
console.log(string)


// chess ================================================================================


let width = prompt("Введите ширину шахматной доски")
let height = prompt("Введите высоту шахматной доски")
let string = ""
let symbolOne = "."
let symbolTwo = "#"

for(i=0; i<width; i++){

for(j=0; j<height; j++){

        let symbol = symbolOne+symbolTwo
        string+=symbol[(i+j)%2]
    }

    string+="\n"
}
console.log(string)


// cubes ================================================================================


let arr = []
let N = prompt('Введите колличество элементов массива')

for(i=0; arr.length<N; i++){
    arr[i] = (Math.pow(i,3))
}
console.log(arr)


// multiply table ================================================================================


let arr =[]

for(let i=0; i<=9; i++){
    arr[i]=[]

for(let j=0; j<=9; j++){
    arr[i].push(j*i)

}
}
console.log(arr)


// matrix to html table ================================================================================


document.write ('<table border=2px width=500px height=500px>')
let arr =[]

for(let i=1; i<=9; i++){
    arr[i]=[]
    document.write('<tr>');

for(let j=1; j<=9; j++){
    arr[i].push(j*i)
    document.write('<td>'+(j*i)+'</td>')
}
}


// Задание на синий пояс: Треугольник ================================================================================


let string = ''
let symbolOne = "."
let symbolTwo = "܍"

for(i=1; i<=6; i++){

    for(j=0; j<(6-i); j++){
        string+=symbolOne
    }

    for(b=1; b<=((i*2)-1); b++){
        string+=symbolTwo    
    }

    for(c=0; c<6-i; c++){
        string+=symbolOne
    }
    string+="\n"
}
console.log(string)


// ================================================================================================================================================================
