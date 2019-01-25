import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const title = 'Demo Application';

ReactDOM.render(    
    <App />,
    document.getElementById('app')
);

module.hot.accept();