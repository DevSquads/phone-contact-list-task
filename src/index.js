import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import ContactList from './Components/ContactList';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
    <ContactList />,
    document.getElementById('root')
);

serviceWorker.unregister();
