import  React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends Component{
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return (
                            <TopicItem key={item.get('id')}>
                                <img 
                                    src={ item.get('imgUrl') } 
                                    alt={item.get('title')}
                                    className='topic-pic'
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.getIn(['home','topicList'])
    }
}

const mapDispatchToProps=(dispatch)=>{}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);