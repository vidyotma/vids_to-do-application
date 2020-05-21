import {GET_LIST} from './actionType'
import {DELETE_ITEM} from './actionType'

export const getList = (payload) =>{
    return{
        type:GET_LIST,
        payload
    }
}
export const deleteOneItem = (payload) => {
    return{
        type:DELETE_ITEM,
        payload
    }
}