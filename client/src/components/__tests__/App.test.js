import React from 'react';

// only needed when Jest only is used.
//import ReactDOM from 'react-dom';

// Enzyme
// shallow is for the component but not children of the component
import { shallow } from 'Enzyme';

import App from '../App';
import ComponentBox from '../ComponentBox';

it('shows a component box and list', () => {

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
    const wrapped = shallow(<App />);

    // Wheather or not ComponentBox exists: 0 -> no exist, 1-> exist
    expect(wrapped.find(ComponentBox).length).toEqual(1);

});