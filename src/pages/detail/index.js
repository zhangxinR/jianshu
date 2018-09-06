import  React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content
} from './style'
import {
    actionCreators
} from './store';

class Detail extends PureComponent{
    render(){
        const { title,content } = this.props;
        return (
            <DetailWrapper>
                <Header>
                    { title }
                </Header>
                <Content dangerouslySetInnerHTML={{__html:content}} />
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail();
    }
}

const mapStateToProps=(state)=>{
    return {
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}

const maoDispatchToProps=(dispatch)=>{
    return {
        getDetail(){
            dispatch(actionCreators.getDetail())
        }
    }
}

export default connect(mapStateToProps,maoDispatchToProps)(Detail);