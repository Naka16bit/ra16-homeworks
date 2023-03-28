import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

const facts = [
    { 
        id: nanoid(),
        text: "Прообразом Чубакки стал пёс режиссёра",
    },
    {
        id: nanoid(),
        text: "Актёрам разрешили подобрать любимый цвет для своих световых мечей",
    },
    {
        id: nanoid(),
        text: "В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
    },
    {
        id: nanoid(),
        text: "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
    },
    {
        id: nanoid(),
        text: "Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
    },
];

const initialState = {
    facts,
    amount: "",
}
  
const factsSlice = createSlice({
    name: "facts",
    initialState,
    reducers: {
        inputValue(state, action) {
            state.amount = action.payload;
        },
    }
});

export const {inputValue} = factsSlice.actions;
export default factsSlice.reducer;