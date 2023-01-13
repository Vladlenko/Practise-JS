// makeProfileTimer =====================================================================================


function makeProfileTimer(){
    const start = performance.now()
    return () => {
        const finish = performance.now()
        return finish - start
    }
}

const timer = makeProfileTimer()
console.log('Замеряем время работы этого console.log')
console.log(`Время работы console.log = ${timer()} мкс`)


// makeSaver =====================================================================================


function makeSaver (func) {
    let funcResult
    let stopFunc = true

    return () => {

        if (stopFunc) {
            stopFunc = false
            funcResult = func()
        } 
        console.log(funcResult)
        return funcResult
    }
}

const saver = makeSaver(Math.random)
const value1 = saver()
const value2 = saver()

console.log(value1 === value2)

const saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
const value3 = saver2()
const value4 = saver2()

console.log(value3 === value4)

const namePrompt = prompt.bind(window, 'Как тебя зовут?')
const nameSaver = makeSaver(namePrompt)
alert(`Привет! Prompt еще не было!`)
alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`)


// myBind =====================================================================================


function myBind (func, funcThis, arr) {
    let result
    return function (...passParam) {
        for (let i =0; i < passParam.length; i ++) {
            for (let j = 0; j < arr.length; j ++) {
                if (arr[j] === undefined){
                    arr[j] = passParam[i]
                    passParam.shift()
                }
            }
        }
        result = func.call(funcThis,...arr)
        return console.log(result)
    }
}


const pow5 = myBind(Math.pow, Math, [, 5])
pow5(2)

const cube = myBind(Math.pow, Math, [, 3])
cube(3)


const chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
chessMin(-1,-5,3,15)

const zeroPrompt = myBind(prompt, window, [undefined, "0"])
const someNumber = zeroPrompt("Введите число")

const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])
bindedJoiner('a','c','d') === 'abcdef'
bindedJoiner('1','2','3') === '1b23ef'


// checkResult =====================================================================================


function checkResult(original, validator){

    function wrapper(...params){
        const originalResult = original.call(this,...params)
        const checkValid = validator(originalResult)

        if (checkValid === true){
            return originalResult
        }
        else {
            return wrapper(...params)
        }
    }
    return wrapper
}

function me () {
    let meObj = {}
    meObj.name = prompt('Введите имя')
    meObj.surname = prompt('Введите фамилию')
    meObj.fatherName = prompt('Введите отчество')
    return meObj
}

const randomHigh = checkResult(Math.random, x => x>=0.5 && x<=1)
const alwaysSayYes = checkResult(confirm, x => x === true)
const respectMe = checkResult(me, x => Object.values(x).includes('') ? false : true)