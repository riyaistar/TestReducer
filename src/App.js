import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './coponent/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/cake/store';
import IceCreamContainer from './coponent/IceCreamContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
