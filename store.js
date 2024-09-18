import { combineReducers, configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./CounterReducer"
import UserDataReducer from "./UserDataReducer";

const store = configureStore({
    reducer: {
        Counter: CounterReducer,
        Users: UserDataReducer
    }
});

export default store