import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
// BrowserRouter代表路由，Route代表路由规则
import Header from './common/header';
import store from './store';
import Home from './pages/home';
//将被loadable处理成异步组件的detail导入
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route path='/' exact render={()=><div>home</div>}></Route> */}
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
