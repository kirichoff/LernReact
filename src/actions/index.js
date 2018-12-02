let nextTodoId = 0
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