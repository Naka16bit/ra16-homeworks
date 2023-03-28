import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

const initialState = {
    imgList: [
        {id: nanoid(), src: "https://i.pinimg.com/280x280_RS/c1/96/00/c19600b8a5b57c019eb19eff57ab203a.jpg"},
        {id: nanoid(), src: "https://i.pinimg.com/236x/b9/2c/bc/b92cbcabea310926715ba8c16f572278.jpg"}
    ],
}

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        addImage(state,action) {
            const image = {id: nanoid(), src: action.payload};
            state.imgList.unshift(image);
        },
    }
});

export const {addImage} = imagesSlice.actions;
export default imagesSlice.reducer;