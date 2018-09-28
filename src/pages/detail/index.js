import  React,{PureComponent} from 'react';
//由于detail组件被异步处理，不能直接获取路由中的参数
//需要引入withRouter让detail有能力获取路由中的参数，创建一个连接到 Router 的新组件（借用 redux 术语）
import { withRouter } from 'react-router-dom';
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
    };

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    };
}

const mapStateToProps=(state)=>{
    return {
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
};

const maoDispatchToProps=(dispatch)=>{
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id));
        }
    }
};

export default connect(mapStateToProps,maoDispatchToProps)(withRouter(Detail));