import  React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import { 
    Topic,
    List,
    Recommend,
    Writer 
} from './components';
import {
    actionCreators
} from './store'

class Home extends PureComponent{
    render(){
        return (
            <HomeWrapper>
            <HomeLeft>
                <img 
                className='banner-img' 
                src="//upload.jianshu.io/admin_banners/web_images/4431/05142bf9b8bb00a31e0ceae8a16856bc896f529e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
                alt="banner"
                />
                <Topic></Topic>
                <List></List>
            </HomeLeft>
            <HomeRight>
                <Recommend></Recommend>
                <Writer></Writer>
            </HomeRight>
            {
                this.props.showScroll && <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            }  
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    
    handleScrollTop(){
        window.scrollTo(0,0);
    }
}

const mapStateToProps = (state) =>{
    return {
        showScroll:state.getIn(['home','showScroll'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeHomeData(){
            dispatch ( actionCreators.changeHomeList())
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop > 300){
                dispatch(actionCreators.toggleTopShow(true));
            }else {
                dispatch(actionCreators.toggleTopShow(false));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);