import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Action";

const PostSlice = createSlice({
    name: 'post',
    initialState: {
        post: [],
        valueSearch: '',
        nameValue: '',
        bodyValue: '',
    },
    reducers: {
        getPost: (state, action) => {
            state.post = action.payload
        },
        getValueTitle: (state, action) => {
            state.nameValue = action.payload
        },
        getValueSearch: (state, action) => {
            state.valueSearch = action.payload
        },
        getValueBody: (state, action) => {
            state.bodyValue = action.payload
        },
        editPost:( state, action ) => {
            // eslint-disable-next-line array-callback-return
            state.post.map( item => {
                if( item.id === action.payload.id ){
                    item.title = action.payload.title
                    item.body = action.payload.body
                }
            } )
        }
    }
})

// Get API functions

export const getPostFunc = () => apiCall({
    url: '/posts',
    method: 'get',
    onSuccess: PostSlice.actions.getPost.type
})
export const editPostFunc =(data)=> apiCall({
    url:'/posts/' + data.id,
    method:'put',
    data,
    onSuccess:PostSlice.actions.editPost.type,
})

// Functions

export const getValueSearchFunc = (e) => {
    return async dispatch => {
        await dispatch({
            type: PostSlice.actions.getValueSearch.type,
            payload: e.target.value
        })
    }
}
export const getValueTitleFunc = (val) => {
    return async dispatch => {
        await dispatch({
            type: PostSlice.actions.getValueTitle.type,
            payload: val
        })
    }
}
export const getValueBodyFunc = (val) => {
    return async dispatch => {
        await dispatch({
            type: PostSlice.actions.getValueBody.type,
            payload: val

        })
    }
}

export default PostSlice.reducer