import {  fromJS } from 'immutable';

//fromJS可以将一个js对象转化为immutable对象(immutable:不可变)
const stateDefault=fromJS({
    topicList:[
        {
            id:1,
            title:'社会热点',
            imgUrl:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },{
            id:2,
            title:'手绘',
            imgUrl:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ]
});

//纯函数，给定固定输入，就给定固定输出。无副作用
export default (state = stateDefault,action)=>{
    switch (action.type){
        default :
            return state;
    }
}