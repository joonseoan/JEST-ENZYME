import React from 'react';
import ReactDOM from 'react-dom';

// Since we used Root.js component
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from 'reducers';
// Instead, we improt Root.js
import Root from 'Root';


import App from 'components/App';

 // {} => we do not have any initial state in reducers,
    // it must be empty object.
ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector('#root')
);

