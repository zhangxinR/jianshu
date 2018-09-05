import  React,{Component} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import { Topic,List,Recommend,Writer } from './components';

class Home extends Component{
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
            </HomeWrapper>
        )
    }
}

export default Home;