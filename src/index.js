import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import './i18';
import Spassword from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Spassword />, document.getElementById('root'));

serviceWorker.unregister();
 