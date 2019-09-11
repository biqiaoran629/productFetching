import React from 'react';
import './App.css';
import SearchBar from './components/search/SearchBar';
import Product from './components/product/Product';
import Alert from './components/error/Alert';

//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>App</h1>
      <SearchBar />
      <Alert />
      <Product />
    </div>
  </Provider>
);

export default App;
