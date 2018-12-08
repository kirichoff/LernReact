var obj = {img_src:'./img/icon.png', main_text: 'Mobile devices', button_text: 'Graphics / Ads'}
var Templ2= [
    { style: {
            fontSize: '12',
            color: 'black'
        },
        value: 'txt',
        id: 'TX1'
    },
    { style: {
            fontSize: '12',
            color: 'black'
        },
        value: 'yesss',
        id: 'TX2'
    },
    { style: {
            fontSize: '12',
            color: 'black'
        },
        value: 'просто',
        id: 'TX3'
    },
    { style: {
            fontSize: '12',
            color: 'black'
        },
        value: 'просто',
        id: 'inta'
    }
    ]

/*примерно такого содержания:
****кароче колян тут обявляешь переменную в нее передаешь обьекты с сервера ****
   { style: {
            fontSize: '12',
            color: 'black'
        },
        value: 'txt',
        id: 'TX1'
    }

    потом ппросто заменишь Templ2 ,не важно где, на эту переменную
    все)

 */
const htmlid = (state = [...Templ2], action) => {
    switch (action.type) {
        case 'CHANGE':
            if (action.style != null) {
                console.log(...state)
                console.log('style    '+state[0].value)


               let idsech = function(state,id){
                    for (let i=0; i < state.length; ++i){
                        if (state[i].id == id ){
                            return i;
                        }
                    }
                    return -1;
                }
                let ides= idsech(state,action.id)
                state[ides].style = action.style
                state[ides].value= action.value
                state[ides].id= action.id
                console.log(' html ts  '+'  idsech   '+ idsech(state,action.id) +"   ")
            }
            return [...state]
        case 'ADD': return [...state]
        //...comming soon
        default: return [...state]
    }

}
export default htmlid