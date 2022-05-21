import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import post from "./Reducer/PostReducer";
import comments from './Reducer/CommentReducer';
import photo from './Reducer/PhotoReducer';
import todos from './Reducer/TodoReducer';
import users from './Reducer/UserReducer';
import Api from './Middleware/Api';


export default configureStore({
    reducer:{
        post,
        comments,
        photo,
        todos,
        users
    },
    middleware:[
        Api,
        thunkMiddleware
    ]
})