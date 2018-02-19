import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/app';
import store from './redux/store';

const Render = () => { ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); };
export default Render;
