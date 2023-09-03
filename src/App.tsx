import React from 'react';
import logo from './logo.svg';
import './App.css';

import { store } from './state/store';
import { Provider } from 'react-redux';
import { Tasks } from './components/Tasks';


function App() {
  return (
    <Provider store={store}>
      <Tasks/>
    </Provider>
  );
}

export default App;
