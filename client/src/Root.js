import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';


import reducers from 'reducers';

// Children: when pros delivers a Component itself
// initialState: "mapStateToProps" test data being virtually entered at 
//  "state" object. Initial value of initialState must be {} because
//  it is also connected with the real state data. 
export default ({children, initialState = {}}) => {

    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(reduxPromise)
    );

    //children are ComponentBox, ComponentList, App and etc
    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};