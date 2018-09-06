import  React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
import {
    actionCreators
} from '../store'
class List extends PureComponent{
    render(){
        const {articleList,getMoreList,page} = this.props;
        return (
            <div>
                {
                    articleList.map((item,index)=>{
                        //Link可以实现单页面跳转，节省性能。不能用a标签跳转，否则会多次加载HTML文件
                        return (
                            <Link key={index} to="/detail">
                                <ListItem>
                                <img 
                                    src={item.get('imgUrl')} 
                                    alt={item.get('title')}
                                    className="pic"
                                />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore
                    onClick={()=>getMoreList(page)}
                >更多文字</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        articleList:state.getIn(['home','articleList']),
        page:state.getIn(['home',"articlePage"])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getMoreList(page){
            dispatch(actionCreators.getMoreList(page))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);