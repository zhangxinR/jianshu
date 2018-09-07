import  React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent{
    render(){
        const { loginStatus,login } = this.props;

        if( loginStatus ){
            return (
                <div>写文章</div>
            )
        }else{
            // Redirect组件指重定向，当登录状态为true时，重定向到首页
            return <Redirect to='/login'></Redirect>
        }

        
    }

}

const mapStateToProps = (state)=>{
    return {
        loginStatus:state.getIn(['login','login'])
    }
}


export default connect(mapStateToProps,null)(Write);