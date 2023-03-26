const initialState = {
    text: '',
    price:'',
    id: '',
    search: '',
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
    case "CREATE_INPUT":
        const {name, value} = action.payload;
        return {...state, [name]: value};
    case "EDIT_SERVICE":
        const {text, price, id} = action.payload;
        return {text: text, price: price, id: id};
    case "CLEAR_FORM":
        return state = initialState;
    default:
        return state;
    };
};

export default inputReducer