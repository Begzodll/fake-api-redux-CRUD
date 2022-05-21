import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

const TodoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        getTodo:(state,action) => {
            state.todos = action.payload
        }
    }
})
export const getTodo = () => apiCall({
    url:'/todos',
    method:'get',
    onSuccess:TodoSlice.actions.getTodo.type
})
export default TodoSlice.reducer