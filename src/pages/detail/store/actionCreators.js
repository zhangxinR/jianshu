import { actionType } from './';
import { fromJS } from 'immutable';
import axios from 'axios';

const getDetailAction=(data)=>{
    return {
        type:actionType.Get_Detail,
        data:fromJS(data)
    }
};

export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const data=res.data.data;
            dispatch(getDetailAction(data));
        }).catch((e)=>{
            console.log(e)
        })
    }
};