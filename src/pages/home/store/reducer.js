import {  fromJS } from 'immutable';
import { actionType } from './';

//fromJS可以将一个js对象转化为immutable对象(immutable:不可变)
const stateDefault=fromJS({
    topicList:[],
    articleList: [],
    recommendList:[],
    articlePage:1,
    showScroll:false
});

const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:action.data.get("topicList"),
        articleList:action.data.get("articleList"),
        recommendList:action.data.get("recommendList")
    });
}

const moreHomeListData=(state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(action.data),
        articlePage:action.page
    });
}

//纯函数，给定固定输入，就给定固定输出。无副作用
export default (state = stateDefault,action)=>{
    switch (action.type){
        case actionType.Change_Home_DATA:
            return changeHomeData(state,action);
        case actionType.More_Home_List_Data:
            return moreHomeListData(state,action);
        case actionType.Toggle_Scroll_Top:
            return state.set('showScroll',action.show);
        default :
            return state;
    }
}