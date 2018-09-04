import { actionTypes } from './';
import {  fromJS } from 'immutable';

//fromJS可以将一个js对象转化为immutable对象(immutable:不可变)
const stateDefault=fromJS({
    focused:false
});

//纯函数，给定固定输入，就给定固定输出。无副作用
export default (state = stateDefault,action)=>{
    if(action.type===actionTypes.Search_Focus){
        //immutable对象的set方法会结合之前Immutable的值和设置的值，返回一个全新的值
        return state.set('focused',true);
        
        // return {
        //     focused:true
        // }
    }
    if(action.type===actionTypes.Search_Blur){
        return state.set('focused',false);
        
        // return {
        //     focused:false
        // }
    }
    return state;
}