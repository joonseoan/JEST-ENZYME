import { saveComponent } from 'actions/index';
import { SAVE_COMPONENT } from 'actions/types';

describe('saveComponent', () => {
    it('has the correct type', () => {
        const action = saveComponent();
        expect(action.type).toEqual(SAVE_COMPONENT);
    });

    it('has the correct payload', () => {
        const action = saveComponent('New Comment');

        expect(action.payload).toEqual('New Comment');
        
    });
});