export const inputCreate = (name, value) => {
    return {type: 'CREATE_INPUT', payload: {name, value}}
}

export function removeService(id) {
    return {type: 'REMOVE_SERVICE', payload: {id}};
}

export const listCreate = (text, price) => {
    return {type: 'CREATE_LIST', payload: {text, price}}
}

export const editService = (text, price, id) => {
    return {type: 'EDIT_SERVICE', payload: {text, price, id}}
}

export const clearForm = () => {
    return {type: 'CLEAR_FORM'}
}

export const editList = (id, text, price) => {
    return {type: 'EDIT_LIST', payload: {id, text, price}}
}

export const searchList = (value) => {
    return {type: 'SEARCH_LIST', payload: {value}}
}

export default {inputCreate, removeService, listCreate, editService, clearForm, editList, searchList}