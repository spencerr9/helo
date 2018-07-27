import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import store from './ducks/store'

ReactDOM.render(
    <HashRouter store={store}>
        <App />
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
