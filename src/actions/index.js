var def ={ style: {
        fontSize: '12',
        color: 'black'
    },
    value: 'txt',
    id: 'TX1'
}
export const addImg =(img_src,main_text,button_text) => ({
    type:'ADD_IMG',
    img_src: img_src,
    main_text: main_text,
    button_text: button_text
})
export const deleteImg = (i) => ({
    type: 'DELETE_IMAGE',
    i: i
})
export  const changeTemp = (styl=def.style,text = def.value,id=def.id,i=0) =>({
    type:'CHANGE',
    style: styl,
    value: text,
    id: id,
    i:i
})