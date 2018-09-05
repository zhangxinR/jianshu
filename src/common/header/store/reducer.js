import { actionTypes } from './';
import {  fromJS } from 'immutable';

//fromJS可以将一个js对象转化为immutable对象(immutable:不可变)
const stateDefault=fromJS({
    focused:false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false
});

//纯函数，给定固定输入，就给定固定输出。无副作用
export default (state = stateDefault,action)=>{
    switch (action.type){
        case actionTypes.Search_Focus :
            return state.set('focused',true);
        case actionTypes.Search_Blur :
            return state.set('focused',false);
        case  actionTypes.Change_List:
            //immutable中merge方法可以同时改变对象中多个内容
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
            // return state.set('list',action.data).set('totalPage',action.totalPage);
        case actionTypes.Mouse_Enter:
            return state.set('mouseIn',true);
        case actionTypes.Mouse_Leave:
            return state.set('mouseIn',false);
        case actionTypes.Change_Page:
            return state.set('page',action.page);
        default :
            return state;
    }

    // if(action.type===actionTypes.Search_Focus){
    //     //immutable对象的set方法会结合之前Immutable的值和设置的值，返回一个全新的值
    //     return state.set('focused',true);
        
    //     // return {
    //     //     focused:true
    //     // }
    // }
    // if(action.type===actionTypes.Search_Blur){
    //     return state.set('focused',false);
        
    //     // return {
    //     //     focused:false
    //     // }
    // }
    // if(action.type===actionTypes.Change_List){
    //     // console.log(111);
    //     return state.set('list',action.data);
    // }
    // return state;
}