

var obj = {img_src:'./img/icon.png', main_text: 'Mobile devices', button_text: 'Graphics / Ads'}
const todos = (state = [obj,obj], action) => {
    switch (action.type) {
        case 'ADD_IMG':
            return [
                ...state,
                {
                    img_src: action.img_src,
                    main_text: action.main_text,
                    button_text: action.button_text
                }
            ]
    case 'DELETE_IMAGE':
        state.splice(action.i,1);
        return state
        default: return state
     }

}

export default todos
