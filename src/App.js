import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
// BrowserRouter代表路由，Route代表路由规则
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              {/* <Route path='/' exact render={()=><div>home</div>}></Route> */}
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
        </Provider>
    );
  }
}

export default App;
