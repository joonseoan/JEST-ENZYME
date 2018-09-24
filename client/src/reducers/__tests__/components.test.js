import componentReducer from 'reducers/components';
import {SAVE_COMPONENT} from 'actions/types';

it('handles actions of type SAVE_COMPONENT', () => {
    
    const action = {
        type: SAVE_COMPONENT,
        payload: 'New Comment'
    };

    // [] initial state of reducer
    // action : action.type is sames as SAVE-COMPONENT, payload
    const newState = componentReducer([], action);
    
    expect(newState).toEqual(['New Comment']);

});

it('handles actions with unknown type', () => {

    // When type is not know,
    const newState = componentReducer([], { type : 'dafdadfaf'});
    // state must be empty.
    expect(newState).toEqual([]);
});
