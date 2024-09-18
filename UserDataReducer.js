import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const UserDataReducer = createSlice({
    name:"Users",
    initialState:{
        data:[]
    },
    reducers:{
        add:(state,action)=>{
            console.log("udata is "+action.payload);
            
            state.data = [
                ...state.data,
                action.payload
            ]
            
            
            // state.data.push(udata)
        },
        deleteuser:(state,action)=>{
            state.data = state.data.filter((i)=>{
                return i.id!=action.payload
            })
        }
    }
})
export const {add,deleteuser} = UserDataReducer.actions
export default UserDataReducer.reducer
