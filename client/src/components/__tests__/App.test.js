import React from 'react';

// only needed when Jest only is used.
//import ReactDOM from 'react-dom';

// Enzyme
// shallow is for the component but not children of the component
import { shallow } from 'enzyme';

// Since we setup path in .env file
// import App from '../App';
// import ComponentBox from '../ComponentBox';
// import ComponentList from '../ComponentList';

import App from 'components/App'
import ComponentBox from 'components/ComponentBox';
import ComponentList from 'components/ComponentList';

let wrapped;

// When helper function necessary. It is normal.
beforeEach (() => {
    
    wrapped = shallow(<App />);

});


it('shows a component box', () => {

    // [Jest]
    /* // create an interim html element 'div' of JSDOM to test.
    // To create JSDOM, use 'create' method
    const div = document.createElement('div');

    // render <App/> to interim div
    ReactDOM.render(<App />, div);

    console.log(div.innerHTML);

    expect(div.innerHTML).toContain('Box' || 'List');

    ReactDOM.unmountComponentAtNode(div);    
 */

    // [Enzyme]
    // wrapped the component on top
    // const wrapped = shallow(<App />);

    // Wheather or not ComponentBox exists: 0 -> no exist, 1-> exist
    expect(wrapped.find(ComponentBox).length).toEqual(1);

});

it('shows a component list', () => {

    // const wrapped = shallow(<App />);
    expect(wrapped.find(ComponentList).length).toEqual(1);

});