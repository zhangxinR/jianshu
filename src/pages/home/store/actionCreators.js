import { actionType } from './';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeListAction=(data)=>{
    data=fromJS(data);
    return {
        type:actionType.Change_Home_DATA,
        data
    }
};

const getMoreListAction=(data,page)=>{
    data=fromJS(data);
    return {
        type:actionType.More_Home_List_Data,
        data,
        page
    }
};

export const changeHomeList=()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeListAction(result));
        }).catch((e)=>{
            console.log(e);
        });
    };
};

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeMoreList.json?page='+page).then((res)=>{
            const result=res.data.data;
            dispatch(getMoreListAction(result,page+1));
        }).catch((e)=>{
            console.log(e);
        });
    }
}
export const toggleTopShow=(show)=>({
    type:actionType.Toggle_Scroll_Top,
    show
})