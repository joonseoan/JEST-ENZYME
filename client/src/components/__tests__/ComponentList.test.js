import React from 'react';
import {mount} from 'enzyme';

import ComponentList from 'components/ComponentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {

  const initialState = {
    // property key name must be same as state's propety key name
    coms: ['Comment 1', 'Comment 2']
  };

  wrapped=mount(
      // must remember component itself can be delivered to the child component.
    <Root initialState={initialState}>
      <ComponentList/>
    </Root>  
  );

});

it('create one LI per component', () => {
  
    console.log(wrapped.find('li').length);
    expect(wrapped.find('li').length).toEqual(2);

});

it('shows the text for each comment', () => {
  
  // text method: airbnb.io/enzyme => text()
  // for testing text, use render() function looking at real rendering text
  //   with cheerio. cheerio.js for testing rendering text
  //  :https://cheerio.js.org/

  // console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
  
});