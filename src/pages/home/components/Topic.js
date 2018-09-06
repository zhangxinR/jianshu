import  React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends PureComponent{
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

export default connect(mapStateToProps)(Topic);