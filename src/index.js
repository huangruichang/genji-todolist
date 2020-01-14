import Genji from 'genji';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import todoList from './models/todoList';
import App from './components/App';
import "antd/dist/antd.css";
import './global.css';

const genji = new Genji({ injectEffectLoading: true, autoUpdateEffectLoading: true });
genji.model(todoList);
genji.start();

const store = genji.getStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
