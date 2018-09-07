import React from 'react';
import Loadable from 'react-loadable';

//异步加载组件,打开哪个页面时只加载该页面的组件,提高性能
const LoadableComponent = Loadable({
    //import引入需要再加的组件
  loader: () => import('./'),
  //loading表示当页面加载出来之前显示的临时组件
  loading(){
      return <div>正在加载</div>
  },
});

//只有render，可写成无状态组件
export default () => <LoadableComponent/>;

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }