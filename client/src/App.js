import React from 'react';
import './App.css';
import SearchBarLayout from './layout/SearchBarLayout';
import ProductLayout from './layout/ProductLayout';

//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1 className="app__header">Amazon Product Search Tool</h1>
      <SearchBarLayout />
      <ProductLayout />
    </div>
  </Provider>
);

export default App;
