// ES6 ==============================================================================
// a =======================================


let a = (...arguments) => alert(arguments)
// a("Привет")
// a("Как дела?")
// a("Как погода?")


// cube =======================================


let cube =(...arguments) => arguments**=3
cube(17)


// avg2 =======================================


let avg2 = (...arguments) => (arguments[0]+arguments[1])/2
// avg2(7,10)


// sum3 =======================================


let sum3 = (...arguments) => arguments[0]+(arguments[1] ? arguments[1] : 0)+(arguments[2]?arguments[2]:0)
// sum3(1,2,3)


// intRandom ======================================= 


let intRandom = (...arguments) => (Math.round(Math.random() * ((arguments[1]?arguments[1]:0) - arguments[0] ) + arguments[0]))
// intRandom (0,1) 


// greetAll ======================================= 


let greetAll = (...arguments) => {
    for(let i=0; i<arguments.lenght; i++){
        arguments+=arguments[i]
    }
    alert('Hello' +' '+ arguments.join(', '))
}
// greetAll('Kate','Vlad','Marina','Sveta','Andrey','Cat','Superman')


// sum ======================================= 


let sum = (...arguments) =>{
    let result = 0
    for(let i=0; i<arguments.length; i++){
        result+=arguments[i]
    }
    return result
}
// sum(10,20,40,100)


// Union ======================================= 


aChoice = () => a("Привет")
cubeChoice = () => cube(17)
avg2Choice = () => avg2(7,10)
sum3Choice = () => sum3(1,2,3)
intRandomChoice = () => intRandom(0,1)
greetAllchoice = () => greetAll('Kate','Vlad','Marina','Sveta','Andrey','Cat','Superman')
sumChoice = () => sum(10,20,40,100)

let taskChoice

let taskChoiceFunc = () => {
    taskChoice= prompt('Введите название задания: \n a - cube - avg2 - sum3 - intRandom - greetAll - sum')
    switch(taskChoice?.toLowerCase()){
        case 'a': aChoice()
        break;
        case 'cube': console.log(cubeChoice())
        break;
        case 'avg2': console.log(avg2Choice())
        break;
        case 'sum3': console.log(sum3Choice())
        break;
        case 'intrandom': console.log(intRandomChoice())
        break;
        case 'greetall': greetAllchoice()
        break;
        case 'sum': console.log(sumChoice())
    }
    taskChoice?taskChoiceFunc():false
}
taskChoiceFunc()


// Union declarative =======================================


let taskChoiceTwo = prompt('Введите название задания')

const functionObj = {
    'a': aChoice,
    'cube': cubeChoice,
    'avg2': avg2Choice,
    'sum3': sum3Choice,
    'intrandom': intRandomChoice,
    'greetall': greetAllchoice,
    'sum': sumChoice
}

functionObj[taskChoiceTwo.toLowerCase()]()


// sort ==============================================================================


var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

let sort = (arr,key,Boolean) =>
arr.sort((a,b) => 
Boolean? (a-b) || (a[key]<b[key] ? -1 : 1)  :  (b-a) || a[key]>b[key] ? -1 : 0
)

console.log(sort(persons,'name',true))
console.log(sort(persons,'age',true))
console.log(sort(persons,'name',false))
console.log(sort(persons,'age',false))
console.log(sort(persons,'name'))
console.log(sort(persons,'age'))


// array map ==============================================================================


let arr = ["1", {}, null, undefined, "500", 700]
let arrMap = arr.map((index) => parseInt(index)?Number(index):index)

console.log(arrMap)


// array reduce ==============================================================================


let arr = ["0", 5, 3, "string", null]
let arrReduce = arr.reduce((index1,index2) => typeof index2 ==='number' ? index1*index2 : index1,1)

console.log(arrReduce)


// object filter ==============================================================================


var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

const filter =(obj,func) =>{
    for(let key in obj){
        !func(key,obj[key]) ? delete obj[key] : obj[key]
    }
    console.log(obj)
}
filter(phone,(key,value) => key == "brand" || value == 2)


// object map ==============================================================================


const map =(obj,func) => {
    let result={}
        for (let key in obj){
            func(key,obj[key]) ? obj : result[key+'_'] = obj[key]+'$'
    }
    console.log(result)
}


map({name: "Иван", age: 17},function(key,value){
    var result = {};
    result[key+"_"] = value + "$";
    return

}) //должен вернуть {name_: "Иван$", age_: "17$"}


// Sum ==============================================================================


let result = 0

const sum = (start,step,finish) => {

    if (finish===0){
        return console.log(result)
    }

    else{
        result+=start
        sum(start+step,step,finish-1)
    }
}

sum(7,5,15)