// assign: evaluation ===============================================================


var a = 5;  
var b, c;

b = a * (5);  
(b = c = b/2); 


// semicolon: error ===============================================================


for (var i = 0; i < 5; i++)
console.log('Hello') console.log('Worls')


// semicolon: mistake ===============================================================


alert("Hello")
[1,2].forEach(alert)];


// Number: age ===============================================================


let year = 2022
let birthYear
let age = prompt('Введите Ваш возраст')
alert(birthYear=year-age)


// Number: temperature ===============================================================


let fahrenheit
let celsius = prompt('Сколько градусов за окном?'+ ' ℃ ')
alert(fahrenheit=(celsius*1.8)+32 + ' ℉')


// Number: divide ===============================================================


let x = prompt('Ввведите число')
let y = prompt('Ввведите число')
alert(Math.floor(x/y))


// Number: odd ===============================================================


let x = prompt("Введите число")
if (!isNaN(x)) 
{
    if(x%2==0){
        alert('Это четное число')
    }else{
        alert('Это нечетное число')
    }
}else{
    alert('Это не число')
}


// String: greeting ===============================================================


let yourName = prompt('Введите свое имя')
alert(yourName  + ' Привет!')


// StriIng: lexics ===============================================================


let word = prompt('Введите несколько слов')
if(word.includes('лох' && 'плохой' && 'дурак'))
alert('Сам такой!')
else
alert ('Приятного дня!')


// confirm ===============================================================


confirm('Хотите перевести ℃ в ℉')
let fahrenheit
let celsius = prompt('Сколько градусов за окном?'+ ' ℃ ')
alert(fahrenheit=(celsius*1.8)+32 + ' ℉')


// Boolean ===============================================================


let footballClub = confirm('Твой любимый футбольный клуб Барселона?')
console.log(footballClub)


// Boolean: if ===============================================================


let footballClub
if (confirm('Твой любимый футбольный клуб Барселона?')){
    alert('Вы фанат Барселоны!')
}else{
    alert('Вы фанат другого клуба!')
}


//Array: booleans ===============================================================


let footballClub = ["Barcelona","Real","ManUnited","Arsenal"]


//Array: plus string ===============================================================


let footballClub = ["Barcelona","Real","ManUnited","Arsenal"]

footballClub[2] = footballClub[0]+footballClub[1]

console.log(footballClub)


//Array: plus ===============================================================


let favoriteNum = [1,2,3,4,5,6,7]

favoriteNum[3] = favoriteNum[0]+favoriteNum[1]+favoriteNum[2]

console.log(favoriteNum)


//Object: real Object: change ===============================================================


let tv = {
    brand: "Samsung",
    diagonal: 43,
    country: "China",
    year: "2022"  
}

tv.brand = "LG"
tv['country'] = "Korea"

console.log(tv)


//Comparison if ===============================================================


var age = prompt("Сколько вам лет?")
if (age < 0){
    age = -age
    alert("До твоего рождения осталось " + age + " лет")
}
else if (age < 18) { alert("школьник")}

else if (age > 18 && age < 30) { alert("молодеж")}

else if (age > 30 && age < 45) { alert("зрелость")}

else if (age > 45 && age < 60) { alert("закат")}

else if (age > 60) { alert("как пенсия?")}

else {alert("то ли киборг, то ли KERNESS")}


// Comparison: sizes===============================================================


let sizesUkr = prompt("Введите украинский размер верхней одежды")
let sizesUsa
let sizesUsaLetter

if (sizesUkr>=40 && sizesUkr<=54) {

    if (sizesUkr==40) {
        sizesUsa=6
        sizesUsaLetter="S"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==42){
        sizesUsa=8
        sizesUsaLetter="M"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==44){
        sizesUsa=10
        sizesUsaLetter="L"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==46){
        sizesUsa=12
        sizesUsaLetter="L"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==48){
        sizesUsa=14
        sizesUsaLetter="L"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==50){
        sizesUsa=16
        sizesUsaLetter="XL"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==52){
        sizesUsa=18
        sizesUsaLetter="XL"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }
    
    else if (sizesUkr==54){
        sizesUsa=20
        sizesUsaLetter="XXL"
        alert("Ваш американский размер " + sizesUsa + "/" +sizesUsaLetter)
    }

}
    else alert("Введите правильный размер")


    // Ternary ===============================================================


let genderQuestion = confirm ("Вы женщина?")
genderQuestion? alert("Вы женщина!"): alert("Вы мужчина!")


// Синий пояс Number: flats ===============================================================


const flatNum = prompt("Введите номер Вашей квартиры")
const floorNum = prompt("Введите колличество этажей в Вашем доме")
const flatOnFloors = prompt("Введите колличество квартир на Вашем этаже")

//Узнаем сколько квартир в одном подъезде
const flatOnEntrance = floorNum*flatOnFloors

//Узнаем в каком подъезде находится квартира
const Entrance = Math.ceil(flatNum/flatOnEntrance)

//Узнаем на каком этаже находится квартира
const Floor = Math.ceil((flatNum-flatOnEntrance*(Entrance-1))/flatOnFloors)

alert("Вы находитесь на "+ Floor + " Этаже " + Entrance + " Подъезда")


// ==============================================================================================================================












