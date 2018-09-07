import {  fromJS } from 'immutable';
import { actionType } from './';

//fromJS可以将一个js对象转化为immutable对象(immutable:不可变)
const stateDefault=fromJS({
    login:false
});

//纯函数，给定固定输入，就给定固定输出。无副作用
export default (state = stateDefault,action)=>{
    switch (action.type){
        case actionType.CHANGE_LOGIN:
            return state.set('login',action.value);
        case actionType.LOGOUT:
            return state.set('login',action.value);
        default :
            return state;
    }
}