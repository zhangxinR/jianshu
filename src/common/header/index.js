import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

const Header=(props)=>{
    var { focused,handleInputBlur,handleInputFocus } = props;
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
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
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    
                    <i 
                    className={focused ? 'focused iconfont' : 'iconfont'}
                    >&#xe66e;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'>
                    <i className='iconfont'>&#xe603;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


//映射数据到props
const mapStateToProps = (state)=>{
    return {
        //state已默认为immutable对象，不能使用.直接获取数据
        focused:state.getIn(['header','focused']) //等价于下面.get方法
        // focused:state.get('header').get('focused')
        //focused:state.header.focused
    }
}

//映射方法及dispatch到props
const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(){
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);