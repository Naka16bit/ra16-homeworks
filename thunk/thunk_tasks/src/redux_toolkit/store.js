import { configureStore } from '@reduxjs/toolkit';
import factsReducer from './slices/facts';
import imagesReducer from './slices/images';

const store = configureStore({
    reducer: {
        facts: factsReducer,
        images: imagesReducer,
    }
});

export default store;