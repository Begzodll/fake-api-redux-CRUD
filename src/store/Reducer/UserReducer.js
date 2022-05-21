import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api"

const UserSlice = createSlice({
    name:'todo',
    initialState:{
        users:[]
    },
    reducers:{
        getUsers:(state,action) => {
            state.users = action.payload
        }
    }
})
export const getUser = () => apiCall({
    url:'/users',
    method:'get',
    onSuccess:UserSlice.actions.getUsers.type
})
export default UserSlice.reducer