var obj = {img_src:'./img/icon.png', main_text: 'Mobile devices', button_text: 'Graphics / Ads'}
var Templ =
{ style: {
    fontSize: '12',
        color: 'black'
    },
    value: 'txt',
    id: 'templ'
};
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
    }
    ]

const htmlid = (state = [...Templ2], action) => {
    switch (action.type) {
        case 'CHANGE':
            state[action.i].style = action.style
            state[action.i].value= action.value
            state[action.i].id= action.id
            return [...state]
        default: return [...state]
    }

}
export default htmlid