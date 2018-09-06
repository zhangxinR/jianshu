// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
//将多个分支reducer使用combineReducers组合成一个总的reducer来管理
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

//redux-immutable提供的combineReducers方法在组合分支reducer时生成的对象为immutable对象
const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer
})
export default reducer;