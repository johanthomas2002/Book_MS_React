import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './Slice/bookSlice'


const bookStore = configureStore({
    reducer:{
        bookReducer:bookSlice
    }
})

export default bookStore