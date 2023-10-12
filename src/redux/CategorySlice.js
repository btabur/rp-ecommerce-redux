import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories :[]
}

export const getCategories = createAsyncThunk('categories',async () =>{
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;
    //38.02
}) 

const categorySlice = createSlice({

    name:"categories",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.app

    }
})