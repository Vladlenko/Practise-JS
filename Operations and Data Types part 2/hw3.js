// switch: sizes ===============================================================


let sizesUkr = prompt("Введите украинский размер верхней одежды")
let sizesUsa
let sizesUsaLetter

switch (sizesUkr){
    case '40': sizesUsa=6, sizesUsaLetter='S', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '42': sizesUsa=8, sizesUsaLetter='M', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '44': sizesUsa=10, sizesUsaLetter='L', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '46': sizesUsa=12, sizesUsaLetter='L', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '48': sizesUsa=14, sizesUsaLetter='L', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '50': sizesUsa=16, sizesUsaLetter='XL', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '52': sizesUsa=18, sizesUsaLetter='XL', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '54': sizesUsa=20, sizesUsaLetter='XXL', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    default: alert('Введите правильный размер')
}

// switch: if ===============================================================


let color = prompt("Введите цвет")

if (color=="red")
{document.write("<div style='background-color: red;'>красный</div>")
 document.write("<div style='background-color: black; color: white;'>черный</div>")}

 else if (color=="black")
{document.write("<div style='background-color: black; color: white;'>черный</div>")}


 else if (color=="blue")
{document.write("<div style='background-color: blue;'>синий</div>")
 document.write("<div style='background-color: green;'>зеленый</div>")}

 else if (color=="green")
{document.write("<div style='background-color: green;'>зеленый</div>")}

 else
{document.write("<div style='background-color: gray;'>Я не понял</div>")}


// prompt: or ===============================================================


let year = Number(prompt('Введите текущий год'))
let age

if (year==true || year==false){
    alert("Ошибка!")
}
else {
    age = Number(prompt("Введите Ваш возраст"))
    if (age==true || age==false){
    alert("Ошибка!")
    }
    else{alert(year-age)}
}


// confirm: or this days ===============================================================


let shoppingBot = confirm("Шопинг?")

if(shoppingBot==false || shoppingBot==false){
    alert("Ты бяка!")
}


// confirm: if this days ===============================================================


let shoppingBot = confirm("Шопинг?")

if(shoppingBot==false){
    alert("Ты бяка!")
}


// triple prompt ===============================================================


let name = prompt("Введите свое имя")
let surName = prompt("Введите свою фамилию")
let patronymic = prompt("Введите свое отчество")
alert(surName + ' ' + name + ' ' + patronymic)


// default: or ===============================================================


let name = prompt("Введите свое имя") || "Vlad"
let surName = prompt("Введите свою фамилию") || "Stasenko"
let patronymic = prompt("Введите свое отчество") || "Andreyevich"
alert(surName + ' ' + name + ' ' + patronymic)


// default: if ===============================================================


let Name = prompt("Введите свое имя")
let surName = prompt("Введите свою фамилию")
let patronymic = prompt("Введите свое отчество")

if (Name==null){
    Name="Vlad"
}
else if(Name==0){
    Name="Vlad"
}

if (surName==null){
    surName="Stasenko"
}
else if(surName==0){
    surName="Stasenko"
}

if (patronymic==null || patronymic==0){
    patronymic="Andreyevich"
}
else if(patronymic==0){
    patronymic="Andreyevich"
}

alert(surName + ' ' + Name + ' ' + patronymic)


// login and password ===============================================================


let login
let password 
login=prompt("Введите логин!")

if(login=="admin"){
    password=prompt("Введите пароль!")
    if (password=="qwerty"){
        alert("Вход выполнен!")
    }
    else if(password!=="qwerty"){
        alert("Не верный пароль!")
    }
}
else{
    alert("Не верный логин!")
}


// currency calc ===============================================================


let currency = prompt("В какую валюту вы хотите перевести деньги, USD или EUR?")
let USD
let EUR
let UAH
switch(currency){
    case "USD": USD=36,87
    UAH=prompt("Сколько гривен Вы бы хотели обменять на USD?")
    alert((UAH/USD).toFixed(2) + " $")
    break
    case "EUR": EUR=37,51
    UAH=prompt("Сколько гривен Вы бы хотели обменять на EUR?")
    alert((UAH/EUR).toFixed(2) + " €")
    break
}


// currency calc: improved ===============================================================


let currency = prompt("В какую валюту вы хотите перевести деньги, USD или EUR?")
currency = currency.toLowerCase()
let USD
let EUR
let UAH
switch(currency){
    case "usd": USD=36,87
    UAH=prompt("Сколько гривен Вы бы хотели обменять на USD?")
    alert((UAH/USD).toFixed(2) + " $")
    break
    case "eur": EUR=37,51
    UAH=prompt("Сколько гривен Вы бы хотели обменять на EUR?")
    alert((UAH/EUR).toFixed(2) + " €")
    break
}


// currency calc: two rates ===============================================================


let currency = prompt(" Введите необходимую валюту USD или EUR?")
currency = currency.toLowerCase()
let currencyChoice
let USD
let EUR
let UAH

let isBuyer=confirm("Хотите купить?")

switch(currency){

    case "usd":
    currencyChoice=isBuyer?40.00:40.25
    if(isBuyer){
    UAH=prompt("Введите сумму в UAH ₴")
    alert("Ваши: " + (UAH/currencyChoice).toFixed(2) + " $") 
    }
    else{
    USD=prompt("Введите сумму в USD $")
    alert("Ваши: " + (USD*currencyChoice).toFixed(2) + " ₴")
    }
    break
    
    case "eur":
    currencyChoice=isBuyer?40.57:40.90
    if(isBuyer){
    UAH=prompt("Введите сумму в UAH ₴") 
    alert("Ваши: " + (UAH/currencyChoice).toFixed(2) + " €")  
    }
    else{
    EUR=prompt("Введите сумму в EUR €")
    alert("Ваши: " + (EUR*currencyChoice).toFixed(2) + " ₴")
    }

    break
}


// currency calc: if  ===============================================================


let currency = prompt(" Введите необходимую валюту USD или EUR?")
currency = currency.toLowerCase()
let currencyChoice
let USD
let EUR
let UAH

let isBuyer=confirm("Хотите купить?")


if(currency=="usd"){
    currencyChoice=isBuyer
    if(currencyChoice===true){
        USD=40.00
        UAH=prompt("Введите сумму в UAH ₴")
        alert("Ваши: " + (UAH/USD).toFixed(2) + " $") 
    }
    if(currencyChoice===false){
        UAH=40.25
        USD=prompt("Введите сумму в USD $")
        alert("Ваши: " + (USD*UAH).toFixed(2) + " ₴")
    }
}

if(currency=="eur"){
    currencyChoice=isBuyer
    if(currencyChoice===true){
        EUR=40.57
        UAH=prompt("Введите сумму в UAH ₴")
        alert("Ваши: " + (UAH/EUR).toFixed(2) + " €") 
    }
    if(currencyChoice===false){
        UAH=40.90
        EUR=prompt("Введите сумму в EUR €")
        alert("Ваши: " + (EUR*UAH).toFixed(2) + " ₴")
    }
}


// scissors ===============================================================


let playerOne = prompt("Введите свое имя")

let choiceOne = prompt(playerOne+ " ,что выберешь? " + " КАМЕНЬ 🪨, НОЖНИЦЫ ✂ или БУМАГУ 📃?")
choiceOne = choiceOne.toLowerCase()

let game = ["камень", "ножницы", "бумага"]
let lucky = game[Math.floor(Math.random()*game.length)]

alert("У меня, " + lucky)

if (choiceOne==lucky){
    alert("Ничья!")
}

else if(choiceOne=="камень" && lucky=="ножницы"){
    alert(playerOne + ", Ты победил!")
}

else if(choiceOne=="бумага" && lucky=="камень"){
    alert(playerOne + ", Ты победил!")
}

else if(choiceOne=="ножницы" && lucky=="бумага"){
    alert(playerOne + ", Ты победил!")
}

else{
    alert(playerOne + ", Ты проиграл!")
}


// Задание на синий пояс ===============================================================


let ratios = {
    usd:{
        buy: 40.00,
        sale: 40.25
    },
    eur:{
        buy: 40.57,
        sale: 40.90
    }
}

let currency = prompt(" Введите необходимую валюту USD или EUR?")
currency = currency.toLowerCase()
let currencyChoice
let UAH

let isBuyer=confirm("Хотите купить?")


if(currency=="usd"){
    currencyChoice=isBuyer
    if(currencyChoice===true){
        UAH=prompt("Введите сумму в UAH ₴")
        alert("Ваши: " + (UAH/(ratios["usd"]["buy"])).toFixed(2) + " $") 
    }
    if(currencyChoice===false){
        USD=prompt("Введите сумму в USD $")
        alert("Ваши: " + (USD*(ratios["usd"]["sale"])).toFixed(2) + " ₴")
    }
}

if(currency=="eur"){
    currencyChoice=isBuyer
    if(currencyChoice===true){
        UAH=prompt("Введите сумму в UAH ₴")
        alert("Ваши: " + (UAH/(ratios["eur"]["buy"])).toFixed(2) + " €") 
    }
    if(currencyChoice===false){
        EUR=prompt("Введите сумму в EUR €")
        alert("Ваши: " + (EUR*(ratios["usd"]["sale"])).toFixed(2) + " ₴")
    }
}


// real data ===============================================================


fetch('https://open.er-api.com/v6/latest/UAH').then(res => res.json())
.then(data => {
       let currency = prompt("Введите необходимую валюту для конвертации USD или EUR?")
       let USD = data.rates.USD
       let EUR = data.rates.EUR
       let UAHusd = (1/USD)
       let UAHeur = (1/EUR)
       console.log(UAHusd)
 
       if(currency=="usd"){
               UAH=prompt("Введите сумму в UAH ₴")
               alert(UAH/UAHusd + " $")
       }
       
       if(currency=="eur"){
               UAH=prompt("Введите сумму в UAH ₴")
               alert(UAH/UAHeur + " €") 
       }
   })


//    Дополнительное задание ===============================================================


let taskChoice = prompt("Введите название задания")

switch (taskChoice){

case "switch: sizes":

    let sizesUkr = prompt("Введите украинский размер верхней одежды")
    let sizesUsa
    let sizesUsaLetter

    switch (sizesUkr){
    case '40': sizesUsa=6, sizesUsaLetter='S', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '42': sizesUsa=8, sizesUsaLetter='M', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '44': sizesUsa=10, sizesUsaLetter='L', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '46': sizesUsa=12, sizesUsaLetter='L', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '48': sizesUsa=14, sizesUsaLetter='L', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '50': sizesUsa=16, sizesUsaLetter='XL', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '52': sizesUsa=18, sizesUsaLetter='XL', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    case '54': sizesUsa=20, sizesUsaLetter='XXL', alert("Ваш американский размер: " + sizesUsa + " / " +sizesUsaLetter)
    break;
    default: alert('Введите правильный размер')
}
break


case "switch: if":

    let color = prompt("Введите цвет")

    if (color=="red")
    {document.write("<div style='background-color: red;'>красный</div>")
     document.write("<div style='background-color: black; color: white;'>черный</div>")}
    
     else if (color=="black")
    {document.write("<div style='background-color: black; color: white;'>черный</div>")}
    
    
     else if (color=="blue")
    {document.write("<div style='background-color: blue;'>синий</div>")
     document.write("<div style='background-color: green;'>зеленый</div>")}
    
     else if (color=="green")
    {document.write("<div style='background-color: green;'>зеленый</div>")}
    
     else
    {document.write("<div style='background-color: gray;'>Я не понял</div>")}
    break


case "prompt: or":

    let year = Number(prompt('Введите текущий год'))
    let age
    
    if (year==true || year==false){
        alert("Ошибка!")
    }
    else {
        age = Number(prompt("Введите Ваш возраст"))
        if (age==true || age==false){
        alert("Ошибка!")
        }
        else{alert(year-age)}
    }
    break


case "confirm: or this days":{

    let shoppingBot = confirm("Шопинг?")

    if(shoppingBot==false || shoppingBot==false){
        alert("Ты бяка!")
    }
}

break


case "confirm: if this days":

let shoppingBot = confirm("Шопинг?")

if(shoppingBot==false){
    alert("Ты бяка!")
}
break
case "triple prompt":

    let name = prompt("Введите свое имя")
    let surName = prompt("Введите свою фамилию")
    let patronymic = prompt("Введите свое отчество")
    alert(surName + ' ' + name + ' ' + patronymic)

    break


case "default: or":{

    let name = prompt("Введите свое имя") || "Vlad"
    let surName = prompt("Введите свою фамилию") || "Stasenko"
    let patronymic = prompt("Введите свое отчество") || "Andreyevich"
    alert(surName + ' ' + name + ' ' + patronymic)

}
break


case "default: if": {

    let Name = prompt("Введите свое имя")
    let surName = prompt("Введите свою фамилию")
    let patronymic = prompt("Введите свое отчество")
    
    if (Name==null){
        Name="Vlad"
    }
    else if(Name==0){
        Name="Vlad"
    }
    
    if (surName==null){
        surName="Stasenko"
    }
    else if(surName==0){
        surName="Stasenko"
    }
    
    if (patronymic==null || patronymic==0){
        patronymic="Andreyevich"
    }
    else if(patronymic==0){
        patronymic="Andreyevich"
    }
    
    alert(surName + ' ' + Name + ' ' + patronymic)
}
break


case "login and password":

    let login
    let password 
    login=prompt("Введите логин!")
    
    if(login=="admin"){
        password=prompt("Введите пароль!")
        if (password=="qwerty"){
            alert("Вход выполнен!")
        }
        else if(password!=="qwerty"){
            alert("Не верный пароль!")
        }
    }
    else{
        alert("Не верный логин!")
    }
    break


    case "currency calc":

        let currency = prompt("В какую валюту вы хотите перевести деньги, USD или EUR?")
let USD
let EUR
let UAH
switch(currency){
    case "USD": USD=36,87
    UAH=prompt("Сколько гривен Вы бы хотели обменять на USD?")
    alert((UAH/USD).toFixed(2) + " $")
    break
    case "EUR": EUR=37,51
    UAH=prompt("Сколько гривен Вы бы хотели обменять на EUR?")
    alert((UAH/EUR).toFixed(2) + " €")
    break
}
break


case "currency calc: improved":
    {
        let currency = prompt("В какую валюту вы хотите перевести деньги, USD или EUR?")
        currency = currency.toLowerCase()
        let USD
        let EUR
        let UAH
        switch(currency){
            case "usd": USD=36,87
            UAH=prompt("Сколько гривен Вы бы хотели обменять на USD?")
            alert((UAH/USD).toFixed(2) + " $")
            break
            case "eur": EUR=37,51
            UAH=prompt("Сколько гривен Вы бы хотели обменять на EUR?")
            alert((UAH/EUR).toFixed(2) + " €")
            break
        }
    }

    break


    case "currency calc: two rates":
        {
            let currency = prompt(" Введите необходимую валюту USD или EUR?")
            currency = currency.toLowerCase()
            let currencyChoice
            let USD
            let EUR
            let UAH
            
            let isBuyer=confirm("Хотите купить?")
            
            switch(currency){
            
                case "usd":
                currencyChoice=isBuyer?40.00:40.25
                if(isBuyer){
                UAH=prompt("Введите сумму в UAH ₴")
                alert("Ваши: " + (UAH/currencyChoice).toFixed(2) + " $") 
                }
                else{
                USD=prompt("Введите сумму в USD $")
                alert("Ваши: " + (USD*currencyChoice).toFixed(2) + " ₴")
                }
                break
                
                case "eur":
                currencyChoice=isBuyer?40.57:40.90
                if(isBuyer){
                UAH=prompt("Введите сумму в UAH ₴") 
                alert("Ваши: " + (UAH/currencyChoice).toFixed(2) + " €")  
                }
                else{
                EUR=prompt("Введите сумму в EUR €")
                alert("Ваши: " + (EUR*currencyChoice).toFixed(2) + " ₴")
                }
            
                break
            } 
        }

        break


        case "currency calc: if":
            {
                let currency = prompt(" Введите необходимую валюту USD или EUR?")
                currency = currency.toLowerCase()
                let currencyChoice
                let USD
                let EUR
                let UAH
                
                let isBuyer=confirm("Хотите купить?")
                
                
                if(currency=="usd"){
                    currencyChoice=isBuyer
                    if(currencyChoice===true){
                        USD=40.00
                        UAH=prompt("Введите сумму в UAH ₴")
                        alert("Ваши: " + (UAH/USD).toFixed(2) + " $") 
                    }
                    if(currencyChoice===false){
                        UAH=40.25
                        USD=prompt("Введите сумму в USD $")
                        alert("Ваши: " + (USD*UAH).toFixed(2) + " ₴")
                    }
                }
                
                if(currency=="eur"){
                    currencyChoice=isBuyer
                    if(currencyChoice===true){
                        EUR=40.57
                        UAH=prompt("Введите сумму в UAH ₴")
                        alert("Ваши: " + (UAH/EUR).toFixed(2) + " €") 
                    }
                    if(currencyChoice===false){
                        UAH=40.90
                        EUR=prompt("Введите сумму в EUR €")
                        alert("Ваши: " + (EUR*UAH).toFixed(2) + " ₴")
                    }
                }
            }
            

            break

            
            case "scissors":
                let playerOne = prompt("Введите свое имя")

let choiceOne = prompt(playerOne+ " ,что выберешь? " + " КАМЕНЬ 🪨, НОЖНИЦЫ ✂ или БУМАГУ 📃?")
choiceOne = choiceOne.toLowerCase()

let game = ["камень", "ножницы", "бумага"]
let lucky = game[Math.floor(Math.random()*game.length)]

alert("У меня, " + lucky)

if (choiceOne==lucky){
    alert("Ничья!")
}

else if(choiceOne=="камень" && lucky=="ножницы"){
    alert(playerOne + ", Ты победил!")
}

else if(choiceOne=="бумага" && lucky=="камень"){
    alert(playerOne + ", Ты победил!")
}

else if(choiceOne=="ножницы" && lucky=="бумага"){
    alert(playerOne + ", Ты победил!")
}

else{
    alert(playerOne + ", Ты проиграл!")
}
break
case "Задание на синий пояс":
    {
        let ratios = {
            usd:{
                buy: 40.00,
                sale: 40.25
            },
            eur:{
                buy: 40.57,
                sale: 40.90
            }
        }
        
        let currency = prompt(" Введите необходимую валюту USD или EUR?")
        currency = currency.toLowerCase()
        let currencyChoice
        let UAH
        
        let isBuyer=confirm("Хотите купить?")
        
        
        if(currency=="usd"){
            currencyChoice=isBuyer
            if(currencyChoice===true){
                UAH=prompt("Введите сумму в UAH ₴")
                alert("Ваши: " + (UAH/(ratios["usd"]["buy"])).toFixed(2) + " $") 
            }
            if(currencyChoice===false){
                USD=prompt("Введите сумму в USD $")
                alert("Ваши: " + (USD*(ratios["usd"]["sale"])).toFixed(2) + " ₴")
            }
        }
        
        if(currency=="eur"){
            currencyChoice=isBuyer
            if(currencyChoice===true){
                UAH=prompt("Введите сумму в UAH ₴")
                alert("Ваши: " + (UAH/(ratios["eur"]["buy"])).toFixed(2) + " €") 
            }
            if(currencyChoice===false){
                EUR=prompt("Введите сумму в EUR €")
                alert("Ваши: " + (EUR*(ratios["usd"]["sale"])).toFixed(2) + " ₴")
            }
        }
    }
    break
case "real data":


fetch('https://open.er-api.com/v6/latest/UAH').then(res => res.json())
.then(data => {
       let currency = prompt("Введите необходимую валюту для конвертации USD или EUR?")
       let USD = data.rates.USD
       let EUR = data.rates.EUR
       let UAHusd = (1/USD)
       let UAHeur = (1/EUR)
       console.log(UAHusd)
 
       if(currency=="usd"){
               UAH=prompt("Введите сумму в UAH ₴")
               alert(UAH/UAHusd + " $")
       }
       
       if(currency=="eur"){
               UAH=prompt("Введите сумму в UAH ₴")
               alert(UAH/UAHeur + " €") 
       }
   })
   break
}


// Задание на черный пояс



