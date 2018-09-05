import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'

const changeList=(data)=>({
    type:actionTypes.Change_List,
    data:fromJS(data),
    totalPage: Math.ceil( data.length / 10 )
})

export const searchFocus=()=>({
    type:actionTypes.Search_Focus
})
export const searchBlur=()=>({
    type:actionTypes.Search_Blur
})

export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            // console.log(res.data);
            const data=res.data;
            dispatch(changeList(data.data));
        }).catch((e)=>{
            console.log(e);
        })
    }
}
export const mouseEnter=()=>({
    type:actionTypes.Mouse_Enter
})
export const mouseLeave=()=>({
    type:actionTypes.Mouse_Leave
})
export const changePage=(page)=>({
    type:actionTypes.Change_Page,
    page
})