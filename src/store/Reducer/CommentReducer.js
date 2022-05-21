import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Action";

const CommentSlice = createSlice({
    name:'post',
    initialState:{
        comments:[],
        nameCard:'',
        bodyCard:'',
    },

    reducers:{
        getComments:(state, action) => {
            state.comments = action.payload
        },
        getNameValue:(state,action) => {
            state.nameCard = action.payload
        },
        getBodyValue:(state, action) => {
            state.bodyCard = action.payload
        },
        editCard:(state,action) => {
            // eslint-disable-next-line array-callback-return
            state.comments.map( item => {
                if( item.id === action.payload.id ){
                    item.name = action.payload.name
                    item.body = action.payload.body
                }
            } )
        }

    }
})
export const getComments = () => apiCall({
    url:'/comments',
    method:'get',
    onSuccess:CommentSlice.actions.getComments.type
})
export const editCardFunc = (data) => apiCall({
    url:'/comments/'+data.id,
    method:'put',
    data,
    onSuccess:CommentSlice.actions.editCard.type
})
// Function
export const getNameValueFunc = (val) => {
    return dispatch => {
        dispatch({
            type:CommentSlice.actions.getNameValue.type,
            payload:val
        })
    }
}
export const getBodyValueFunc = (val) => {
    return dispatch => {
        dispatch({
            type:CommentSlice.actions.getBodyValue.type,
            payload:val
        })
    }
}


export default CommentSlice.reducer