import axios from 'axios';
import { actionType } from './';

const changeLogin=()=>{
    return {
        type:actionType.CHANGE_LOGIN,
        value:true
    }
}

export const login=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?acount='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
}
export const logout=()=>{
    return {
        type:actionType.LOGOUT,
        value:false
    }
}