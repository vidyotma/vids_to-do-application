import React from 'react'
import {GET_LIST} from './actionType'
import {DELETE_ITEM} from './actionType'

const initialState = {
    listofItems :[]
}

export default function Reducer(state= initialState,action) {
    switch (action.type) {
        case GET_LIST:
        return{
            ...state,
            //listofItems:[action.payload]
            listofItems:[...state.listofItems,action.payload]
        }
        case DELETE_ITEM:
        return{
            ...state,
            //listofItems:[action.payload]
            listofItems:state.listofItems.filter(item=>item != action.payload)
        }
         
        default:
            return state
    }
}
