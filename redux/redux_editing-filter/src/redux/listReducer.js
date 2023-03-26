import {nanoid} from "nanoid";

const initialState = [
    {
        id: nanoid(),
        text:'Замена стекла',
        price:'21000'
    },
    {
        id: nanoid(),
        text:'Замена дисплея',
        price:'25000'
    },
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LIST":
            const {text, price} = action.payload;
            return [...state, {id: nanoid(), text, price}];
        case "REMOVE_SERVICE":
            const {id} = action.payload;
            return state.filter((item) => item.id !== id);
        case "EDIT_LIST":
            const index = state.findIndex((item) => item.id === action.payload.id);
            const newState = state;
            newState[index] = action.payload;
            return [...newState];
        case "SEARCH_LIST":
            const {value} = action.payload;
            console.log(value)
            return state.filter((item) => item.text.toLowerCase().indexOf(value.toLowerCase()) >= 0);
        default:
            return state;
    };
};

export default listReducer