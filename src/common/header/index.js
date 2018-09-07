import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style';

class Header extends PureComponent{
    render(){
        const { focused,handleInputBlur,handleInputFocus,list,login,logout } = this.props;
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? 
                        <NavItem 
                            className='right'
                            onClick={logout}
                        >退出</NavItem> :
                        <Link to='/login'>
                            <NavItem className='right'>登录</NavItem>
                        </Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={()=>{handleInputFocus(list)}}
                            onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i 
                        className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >&#xe66e;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <i className='iconfont'>&#xe603;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea(){
        const { 
            focused,list,mouseIn,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage
        }=this.props;
        //list是Immutable的类型，不支持[]形式去取数组中的内容
        //使用toJS方法将immutable类型转换为js类型
        const jsList=list.toJS();
        const pageList=[];
        for (let i=(page-1)*10;i<page*10;i++){
            if(jsList[i]){
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
                        >
                            <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe604;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div style={{overflow:'hidden'}}>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

}


//映射数据到props
const mapStateToProps = (state)=>{
    return {
        //state已默认为immutable对象，不能使用.直接获取数据
        focused:state.getIn(['header','focused']), //等价于下面.get方法
        // focused:state.get('header').get('focused')
        //focused:state.header.focused
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}

//映射方法及dispatch到props
const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(list){
            //减少发送异步请求
            if(list.size===0){
                dispatch(actionCreator.getList());
            }
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            originAngle+=360;
            spin.style.transform='rotate('+originAngle+'deg)';
            page++;
            if(page>totalPage){
                page=1;
            }
            dispatch(actionCreator.changePage(page));
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);