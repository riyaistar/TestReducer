import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './coponent/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/cake/store';
import IceCreamContainer from './coponent/IceCreamContainer';
import AsyncContainer from './coponent/AsyncComp';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <AsyncContainer />
      </div>
    </Provider>
  );
}

export default App;
