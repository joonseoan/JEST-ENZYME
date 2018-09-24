import React from 'react';
import { mount } from 'enzyme';

import ComponentBox from 'components/ComponentBox';

// When we have reducers, connection between ComponentBox and test component
//  is disconnected.
// Therefore, an error occurs at this state.
// In order to prevent the error from redux store / proivder connection,
// we need to setup as below.

// In browser, we will have a message like "The development server has disconnected.
//  Refresh the page if necessary."

// Also, since we use Root.js instead of index.js
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from 'reducers';

// directly connects to Root.js, (ReduxStore) not throu App.js
import Root from 'Root';

let wrapped;

beforeEach(() => {

    wrapped = mount(
        // directly connects to Root.js, (ReduxStore) not throu App.js
        // <Provider store = { createStore(reducers, {}) }>
        <Root>
            <ComponentBox />
        </Root>
        // </Provider>
    );

});

// callback  After each test is done, unmount each component children
// because each component children can still stay connected with the components.
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {

    // BTW, Shallow => shallow

    // airbnb.io/enzyme => find : finds component and also htm
    // console.log(wrapped.find('textarea'));
    // console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

describe('the text area', () => {

    beforeEach(() => {
    
        wrapped.find('textarea').simulate('change', {
            target: {value : 'new comment'}
        });
    
        wrapped.update();
        
    });

    it('has a textarea that users can type in', () => {
    
        // airbnb.io/enzyme => FullDom Rendering => simulate
        // event function name => without 'on'
        
        // mock event object will be merged with the event object 
        // passed to the handlers in the real component
        
        // If the testing function is String, we should make a use of "event"
        // instead of "mock"
    
        // Since it moved to beforeEach above
        /*     wrapped.find('textarea').simulate('change', {
    
            // e.target.value === 'new comment'
            // we use simulte mock instead of event, so
            // we do not need to specify "e" of e.target.value
            target: {value : 'new comment'}
        });
    
        // helper function is not read ty be rendered until it is invoked
        // in the real component.
        // In order for the function to be automatically invoked, we can use
        // update() in enzyme.
        // airbnb.io/enzyme => FullDOM => update
        wrapped.update();
        */

        // with target value, defined in this testto test value of textarea
        //   in the real component 
        // use prop(key)
        // airbnb.io/enzyme => FullDOM => prop(key)
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    
    });
    
    it ('when form is submitted, textarea gets emptied', () => {
    
        // onChange
        // wrapped.find('textarea').simulate('change', {
        //     target: { value: 'new comment'}
        // });
    
        // // run
        // wrapped.update();
    
        // setup Submit test (nothing to be set up for the arguments)
        wrapped.find('form').simulate('submit');
        // run
        wrapped.update();
        // final result
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    
    });

});