function delay (ms) {
        return new Promise ( (resolve, reject) => {
                setTimeout( () => resolve('myDelay'), Math.random()*ms)
        })
}

const myDelay = delay(1000)
const myFetch = fetch('https://swapi.dev/api/people/1/')

Promise.race([myDelay,myFetch]).then((who) => console.log(who))