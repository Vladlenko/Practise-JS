// Таблица умножения ===========================================================================


const table = document.createElement('table')
    document.body.append(table)
    Object.assign(table.style, {width: '435px', height: '385px'})

for (let i=0; i<10; i++){
    const tr = document.createElement('tr')
    table.appendChild(tr)

    
for(let j=0; j<10; j++){
    const td = document.createElement('td')
    Object.assign(td.style, {border: '1px solid', borderColor: '#e1e1e3', textAlign: 'center', width: '20px'})
    tr.appendChild(td)

    let mTable = i*j
    mTable= mTable? mTable: j||i
    i%2? td.style.backgroundColor='#f8f8f8': td.style.backgroundColor='#ffffff'
    td.innerText=mTable
}
}


// Подсветить ячейку ===========================================================================


const table = document.createElement('table')
document.body.append(table)
Object.assign(table.style, {width: '435px', height: '385px'})

for (let i=0; i<10; i++){
    const tr = document.createElement('tr')
    table.appendChild(tr)

    for(let j=0; j<10; j++){
    const td = document.createElement('td')
    Object.assign(td.style, {border: '1px solid', borderColor: '#e1e1e3', textAlign: 'center', width: '20px'})
    tr.appendChild(td)

    let mTable = i*j
    mTable? mTable===0: mTable = j||i
    i%2? td.style.backgroundColor='#f8f8f8': td.style.backgroundColor='#ffffff'
    td.innerText=mTable

    td.onmouseover = function(){
        this.style.backgroundColor='#ffba00'
    }
    td.onmouseout = function(){
        i%2? td.style.backgroundColor='#f8f8f8': td.style.backgroundColor='#ffffff'
    }
}
}


// Подсветить строку и столбец ===========================================================================


const table = document.createElement('table')
document.body.append(table)
Object.assign(table.style, {width: '435px', height: '385px'})

for (let i=0; i<10; i++){
    const tr = document.createElement('tr')
    table.appendChild(tr)

    for(let j=0; j<10; j++){
    const td = document.createElement('td')
    Object.assign(td.style, {border: '1px solid', borderColor: '#e1e1e3', textAlign: 'center', width: '20px'})
    tr.appendChild(td)

    let mTable = i*j
    mTable? mTable===0: mTable = j||i
    i%2? td.style.backgroundColor='#e9e9e9': td.style.backgroundColor='#ffffff'
    td.innerText=mTable

    td.onmouseover = function(){
        td.style.backgroundColor='#d0bf55'
        tr.firstChild.style.backgroundColor='#6768ab'
        table.firstChild.children[j].style.backgroundColor='#6768ab'
    }
    td.onmouseout = function(){
        i%2? td.style.backgroundColor='#e9e9e9': td.style.backgroundColor='#ffffff'
        i%2? tr.firstChild.style.backgroundColor='#e9e9e9': tr.firstChild.style.backgroundColor='#ffffff'
        table.firstChild.children[j].style.backgroundColor='#ffffff'
    }
}
}


// Либо =================================


const table = document.createElement('table')
document.body.append(table)
Object.assign(table.style, {width: '435px', height: '385px'})

for (let i=0; i<10; i++){
    const tr = document.createElement('tr')
    table.appendChild(tr)

    for(let j=0; j<10; j++){
    const td = document.createElement('td')
    Object.assign(td.style, {border: '1px solid', borderColor: '#e1e1e3', textAlign: 'center', width: '20px'})
    tr.appendChild(td)

    let mTable = i*j
    mTable = mTable? mTable: j||i
    i%2? td.style.backgroundColor='#e9e9e9': td.style.backgroundColor='#ffffff'
    td.innerText=mTable

    td.onmouseover = function(){
    td.style.backgroundColor='#d0bf55'

        for(let k=0; k<10; k++){
            td.parentElement.children[k].style.backgroundColor='#6768ab'
            td.style.backgroundColor='#d0bf55'
        }

        for(let l=0; l<table.children.length; l++){
            table.children[l].children[td.cellIndex].style.backgroundColor='#6768ab'
            td.style.backgroundColor='#d0bf55'
        }
    }

    td.onmouseout = function(){
    i%2? td.style.backgroundColor='#e9e9e9': td.style.backgroundColor='#ffffff'

        for(let k=0; k<10; k++){
            i%2?td.parentElement.children[k].style.backgroundColor='#e9e9e9': td.parentElement.children[k].style.backgroundColor='#ffffff'
        }

        for(let l=0; l<table.children.length; l++){
            l%2? table.children[l].children[td.cellIndex].style.backgroundColor='#e9e9e9': table.children[l].children[td.cellIndex].style.backgroundColor='#ffffff'
        }
    }
}
}


// Calc ===========================================================================


const div = document.createElement('div')
document.body.append(div)
Object.assign(div.style, 
    {
        width:'500px',
        height:'175px',
        backgroundColor:'#e1ebf1',
        display:'flex',
        justifyContent:'center',
        flexDirection: 'column',
        alignItems:'center'
    })

const h1 = document.createElement('h1')
div.appendChild(h1)
h1.innerText= 'КОНВЕРТИРОВАНИЕ ЗНАЧЕНИЙ ИЗ PX В EM'
Object.assign(h1.style,
    {
        fontSize:'17px',
        textAlign:'center',
        fontFamily:'Helvetica',
        color:'#273648',
        margin:'0'
    })

const inPut = document.createElement('input')
inPut.id='input'
inPut.type='number'
inPut.placeholder='Введите значение в PX'
div.appendChild(inPut)
Object.assign(inPut.style,
    {
        width:'250px',
        height:'25px',
        border:'1px solid',
        borderColor:'white',
        marginTop:'15px',
        textAlign:'center'
    })

const buttON = document.createElement('button')
buttON.id='button'
div.appendChild(buttON)
Object.assign(buttON.style,
    {
        width:'100px',
        height:'30px',
        marginTop:'15px',
        backgroundColor:'#273648',
        border:'3px solid',
        borderColor:'white',
        cursor:'pointer',
    })

const paragraph = document.createElement('p')
buttON.appendChild(paragraph)
paragraph.innerText='КОНВЕРТИРОВАТЬ'
Object.assign(paragraph.style,
    {
        fontSize:'9px',
        textAlign:'center',
        fontFamily:'Helvetica',
        margin:'0',
        color:'white'
    })

buttON.onclick = function(){
    const inputValue = document.getElementById('input').value
    const pixel = 16
    let em = ((inputValue*100)/pixel)/100
    inPut.type='text'
    document.getElementById('input').value = inputValue + ' px' + ' = ' +  em +' em'
    Object.assign(inPut.style,{fontWeight:'bold'})

    const link = document.createElement('a')
    const linkText = document.createTextNode('Еще конвертация?')
    link.appendChild(linkText)
    link.href = 'index.html'
    div.appendChild(link)
    Object.assign(link.style,
    {
        fontSize:'12px',
        textDecoration:'underline',
        marginTop:'15px',
        color:'#273648',
        fontWeight:'bold',
        cursor:'pointer'
    })
    
    this.onclick=null
}


// Calc Live ===========================================================================


const div = document.createElement('div')
document.body.append(div)
Object.assign(div.style, 
    {
        width:'500px',
        height:'175px',
        backgroundColor:'#e1ebf1',
        display:'flex',
        justifyContent:'center',
        flexDirection: 'column',
        alignItems:'center',
    })

const h1 = document.createElement('h1')
div.appendChild(h1)
h1.innerText= 'КОНВЕРТИРОВАНИЕ ЗНАЧЕНИЙ ИЗ PX В EM'
Object.assign(h1.style,
    {
        fontSize:'17px',
        textAlign:'center',
        fontFamily:'Helvetica',
        color:'#273648',
        margin:'0',
    })

const inPut = document.createElement('input')
inPut.id='input'
inPut.type='number'
inPut.oninput = liveResult
inPut.placeholder='Введите значение в PX'
div.appendChild(inPut)
Object.assign(inPut.style,
    {
        width:'250px',
        height:'25px',
        border:'1px solid',
        borderColor:'white',
        marginTop:'15px',
        textAlign:'center',
        color:'#273648',
    })

const inPutValues = document.createElement('input')
inPutValues.id='inputValues'
inPutValues.type='text'
div.appendChild(inPutValues)
Object.assign(inPutValues.style,
    {
        width:'250px',
        height:'25px',
        border:'1px solid',
        borderColor:'white',
        marginTop:'15px',
        textAlign:'center',
        fontWeight:'bold',
        color:'#273648',
        fontSize:'20px'
    })

function liveResult(){
    const inputValue = document.getElementById('input').value
    const pixel = 16
    let em = ((inputValue*100)/pixel)/100
    document.getElementById('inputValues').value = em + ' em'
}