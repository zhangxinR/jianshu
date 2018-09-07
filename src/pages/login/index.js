import  React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'
import { actionCreators } from './store';

class Login extends PureComponent{
    render(){
        const { loginStatus,login } = this.props;

        if( !loginStatus ){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input 
                            placeholder="请输入账号"
                            innerRef={(input)=>{this.account = input}}
                        ></Input>
                        <Input 
                            placeholder="请输入密码"
                            type="password"
                            innerRef={(input)=>{this.password = input}}
                        ></Input>
                        <Button
                            onClick={()=>login(this.account,this.password)}
                        >登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            // Redirect组件指重定向，当登录状态为true时，重定向到首页
            return <Redirect to='/'></Redirect>
        }

        
    }

}

const mapStateToProps = (state)=>{
    return {
        loginStatus:state.getIn(['login','login'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        login(accountElem,passwordElem){
            //利用styledComponent提供的innerRef获取DOM元素，获取元素的内容
            // console.log(accountElem.value,passwordElem.value);
            dispatch(actionCreators.login(accountElem.value,passwordElem.value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);