// Конвертер значений с px в em
// 16 px = 1 em = 100%
var pixel = 16; 
var em;

do{
    confirm ('Вы желаете перевести Ваше значение px в em ?')
    var userPixel = prompt("Введите значение в px");
    em = ((userPixel*100)/16)/100;
    alert(em + " em" + " Ваш результат");
}while(em !== null)