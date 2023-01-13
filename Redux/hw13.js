function reducer(state, {type, ШО, СКОКА, БАБЛО}){
    if (!state){
        return {
                пиво: {
                    колличество: 100,
                    цена: 52
                },
                сиги: {
                    колличество: 200,
                    цена: 86
                },
                чипсы: {
                    колличество: 50,
                    цена: 43
                },
                ЧЕК: 0,
                СДАЧА: 0,
                КАССА: 0,
        }
    }

    switch({type, ШО, СКОКА, БАБЛО}.type) {
        case 'КУПИТЬ':
            if (state[ШО].колличество <= СКОКА){
                alert(`Товара ${[ШО]} нет в таком колличестве, есть только ${state[ШО].колличество}`)
            }

            if (БАБЛО < state.ЧЕК ) {
                alert(`Не хватает ${state.ЧЕК - БАБЛО}. Приходи, когда будет БАБЛО!`)
            }
            
            else {
                return {
                    ...state,
                    [ШО]: {...state[ШО], колличество:  state[ШО].колличество >= СКОКА ? state[ШО].колличество - СКОКА : state[ШО].колличество},
                    КАССА: БАБЛО >= state.ЧЕК && state[ШО].колличество >= СКОКА  ? state.ЧЕК : 0,
                    СДАЧА: БАБЛО >= state.ЧЕК && state[ШО].колличество >= СКОКА ? БАБЛО - state.ЧЕК : 0
                }
            }
        case 'СУММА ПОКУПКИ':
            return {
                ...state,
                ЧЕК: state[ШО].цена * СКОКА,
            }
        default:
            return state
    }
    }

function createStore(reducer){
    let state = reducer(undefined, {})
    let cbs = []
    
    const getState  = () => state
    const subscribe = cb => (cbs.push(cb), () => cbs = cbs.filter(c => c !== cb))
    const dispatch  = action => { 
        const newState = reducer(state, action)
        if (newState !== state){
            state = newState 
            for (let cb of cbs)  cb()
        }
    }
    
    return {
        getState,
        dispatch,
        subscribe
    }
}

function createAction (){
    return {
        type: 'КУПИТЬ',
        ШО: selectProduct.value,
        СКОКА: +countGoods.value,
        БАБЛО: +moneys.value,
    }
}

const kiosk = reducer(undefined, {})
const store = createStore(reducer)

for (let i = 0; i < Object.keys(kiosk).length; i ++) {
    if (typeof Object.values(kiosk)[i] === 'object') {
        selectProduct.appendChild(document.createElement('option')).innerHTML = Object.keys(kiosk)[i]
    } 
}

beerCount.value = kiosk.пиво.колличество
sigiCount.value = kiosk.сиги.колличество
chipsCount.value = kiosk.чипсы.колличество


store.subscribe( () => beerCount.value = store.getState().пиво.колличество, beer.innerHTML += ` ${store.getState().пиво.цена} UAH/бут.` )
store.subscribe( () => sigiCount.value = store.getState().сиги.колличество, sigi.innerHTML += ` ${store.getState().сиги.цена} UAH/пачку`)
store.subscribe( () => chipsCount.value = store.getState().чипсы.колличество, chips.innerHTML += ` ${store.getState().чипсы.цена} UAH/пачку`)
store.subscribe( () => giveMoney.value = store.getState().ЧЕК)
store.subscribe( () => turningIn.value = store.getState().СДАЧА)

countGoods.oninput = () => {
    store.dispatch({...createAction(), type: 'СУММА ПОКУПКИ'})
}

buy.onclick  = () => {
    store.dispatch(createAction())
    console.log(store.getState())
}


// Store FOOP ===========================================================================================================================================


// function reducer(state, {type, ШО, СКОКА, БАБЛО}){
//     if (!state){
//         return {
//                 пиво: {
//                     колличество: 100,
//                     цена: 52
//                 },
//                 сиги: {
//                     колличество: 200,
//                     цена: 86
//                 },
//                 чипсы: {
//                     колличество: 50,
//                     цена: 43
//                 },
//                 ЧЕК: 0,
//                 СДАЧА: 0,
//                 КАССА: 0,
//         }
//     }

//     switch({type, ШО, СКОКА, БАБЛО}.type) {
//         case 'КУПИТЬ':
//             if (state[ШО].колличество <= СКОКА){
//                 alert(`Товара ${[ШО]} нет в таком колличестве, есть только ${state[ШО].колличество}`)
//             }

//             if (БАБЛО < state.ЧЕК ) {
//                 alert(`Не хватает ${state.ЧЕК - БАБЛО}. Приходи, когда будет БАБЛО!`)
//             }
            
//             else {
//                 return {
//                     ...state,
//                     [ШО]: {...state[ШО], колличество:  state[ШО].колличество >= СКОКА ? state[ШО].колличество - СКОКА : state[ШО].колличество},
//                     КАССА: БАБЛО >= state.ЧЕК && state[ШО].колличество >= СКОКА  ? state.ЧЕК : 0,
//                     СДАЧА: БАБЛО >= state.ЧЕК && state[ШО].колличество >= СКОКА ? БАБЛО - state.ЧЕК : 0
//                 }
//             }
//         case 'СУММА ПОКУПКИ':
//             return {
//                 ...state,
//                 ЧЕК: state[ШО].цена * СКОКА,
//             }
//         default:
//             return state
//     }
//     }

// function CreateStore(reducer){

//     let state = reducer(undefined, {})
//     let cbs = []
    
//     this.getState  = () => state
//     this.subscribe = cb => (cbs.push(cb), () => cbs = cbs.filter(c => c !== cb))
//     this.dispatch  = action => { 
//         const newState = reducer(state, action)
//         if (newState !== state){
//             state = newState 
//             for (let cb of cbs)  cb()
//         }
//     }
// }


// function createAction (){
//     return {
//         type: 'КУПИТЬ',
//         ШО: selectProduct.value,
//         СКОКА: +countGoods.value,
//         БАБЛО: +moneys.value,
//     }
// }

// const kiosk = reducer(undefined, {})

// for (let i = 0; i < Object.keys(kiosk).length; i ++) {
//     if (typeof Object.values(kiosk)[i] === 'object') {
//         selectProduct.appendChild(document.createElement('option')).innerHTML = Object.keys(kiosk)[i]
//     } 
// }

// beerCount.value = kiosk.пиво.колличество
// sigiCount.value = kiosk.сиги.колличество
// chipsCount.value = kiosk.чипсы.колличество


// const stores = new CreateStore(reducer)
// stores.subscribe( () => beerCount.value = stores.getState().пиво.колличество, beer.innerHTML += ` ${stores.getState().пиво.цена} UAH/бут.` )
// stores.subscribe( () => sigiCount.value = stores.getState().сиги.колличество, sigi.innerHTML += ` ${stores.getState().сиги.цена} UAH/пачку`)
// stores.subscribe( () => chipsCount.value = stores.getState().чипсы.колличество, chips.innerHTML += ` ${stores.getState().чипсы.цена} UAH/пачку`)
// stores.subscribe( () => giveMoney.value = stores.getState().ЧЕК)
// stores.subscribe( () => turningIn.value = stores.getState().СДАЧА)

// countGoods.oninput = () => {
//     stores.dispatch({...createAction(), type: 'СУММА ПОКУПКИ'})
// }

// buy.onclick  = () => {
//     stores.dispatch(createAction())
//     console.log(stores.getState())
// }