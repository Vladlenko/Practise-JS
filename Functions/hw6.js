// a ==============================================================================


function a(someStr){
    alert(someStr)
}
// a("Привет")
// a("Как дела?")
// a("Как погода?")


// cube ==============================================================================


function cube(ourNum){
    let result
    result = ourNum**=3
    console.log(result)
}
// cube(17)


// avg2 ==============================================================================


function avg2(firstNum,secondNum){
    let result
    result = (firstNum + secondNum)/2
    console.log(result)

}
// avg2(7,10)


// sum3 ==============================================================================


function sum3(firstNum,secondNum,thirdNum){
    let result
    
    if(thirdNum===undefined){
        thirdNum=0
    }
    else if(secondNum===undefined){
        secondNum=0
    }
    else if (thirdNum===undefined){
        thirdNum=0
    }

    result = (firstNum + secondNum + thirdNum)
    console.log(result)
}
// sum3(1,2,3)


// intRandom ==============================================================================


function intRandom (minNum, maxNum){
let result
if(maxNum===undefined){
    maxNum=minNum
    minNum=0
}
result = Math.round(Math.random() * (maxNum - minNum ) + minNum)
console.log(result)
}
// intRandom(2,15)
// intRandom(-1,-1)
// intRandom(0,1)
// intRandom(10)


// greetAll ==============================================================================


function greetAll() {
let result = ''

for(let i=0; i<arguments.length; i++){
    result+=arguments[i]+', '
}
result = result.slice(0,-2)
alert('Hello '+result)
}
// greetAll('Kate','Vlad','Marina','Sveta','Andrey','Cat','Superman')


// sum ==============================================================================


function sum(){
    let result = 0
for(i=0; i<arguments.length; i++){
result +=arguments[i]

}
console.log(result)
}
// sum(1)
// sum(2)
// sum(10,20,40,100)


// Union ==============================================================================


function aChoice(){
    a("Привет")
    a("Как дела?")
    a("Как погода?")
}

function cubeChoice(){
    cube(17)
}

function avg2Choice(){
    avg2(7,10)
}

function sum3Choice(){
    sum3(1,2,3)
}

function intRandomChoice (){
    intRandom(2,15)
    intRandom(-1,-1)
    intRandom(0,1)
    intRandom(10)
}

function greetAllchoice(){
    greetAll('Kate','Vlad','Marina','Sveta','Andrey','Cat','Superman')
}

function sumChoice(){
    sum(1)
    sum(2)
    sum(10,20,40,100)
}

let taskChoice = prompt('Введите название задания')
switch(taskChoice.toLowerCase()) {
    case 'a': aChoice()
    break;
    case 'cube': cubeChoice()
    break;
    case 'avg2': avg2Choice()
    break;
    case 'sum3': sum3Choice()
    break;
    case 'intrandom': intRandomChoice()
    break;
    case 'greetall': greetAllchoice()
    break;
    case 'sum': sumChoice()
    break;
}


// Union declarative ==============================================================================


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


// ============================================================================================================================================================
