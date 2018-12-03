var obj = {img_src:'./img/icon.png', main_text: 'Mobile devices', button_text: 'Graphics / Ads'}
var Templ =
{ style: {
    fontSize: '12',
        color: 'black',
    },
    value: 'txt',
    id: 'templ'
}
const htmlid = (state = [Templ], action) => {
    switch (action.type) {
        case 'CHANGE':
            state[action.i].style = action.style
            state[action.i].value= action.value
            state[action.i].id= action.id
            return
                [...state]
        default: return [...state]
    }

}