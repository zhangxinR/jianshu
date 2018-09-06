import {  fromJS } from 'immutable';
import { actionType } from './';

//fromJS可以将一个js对象转化为immutable对象(immutable:不可变)
const defaultState=fromJS({
    title:'',
    content:''
});

//纯函数，给定固定输入，就给定固定输出。无副作用
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionType.Get_Detail:
            return state.merge({
                title:action.data.get('title'),
                content:action.data.get('content')
            })
        default :
            return state;
    }
}