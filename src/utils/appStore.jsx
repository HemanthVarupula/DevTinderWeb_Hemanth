import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import feedReducer from "./feedSlice"
import connectionreducer from "./connectionSlice";
import requestReducer from "./requestSlice"
// import { addUser,removeUser } from "./userSlice";
const appStore=configureStore(
    {
        reducer:{
            user:useReducer,
            feed:feedReducer,
            connection:connectionreducer,
            requests:requestReducer
        }
    }
)

export default appStore;