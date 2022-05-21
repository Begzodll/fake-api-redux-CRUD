import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

const PhotoReducer = createSlice({
    name:'photos',
    initialState:{
        photos:[]
    },
    reducers:{
        getPhoto:(state,action) => {
            state.photos = action.payload
        }
    }
})

export const getPhoto = () => apiCall({
    url:'/photos',
    method:'get',
    onSuccess:PhotoReducer.actions.getPhoto.type
})

export default PhotoReducer.reducer