import { SAVE_COMPONENT, FETCH_DATA } from 'actions/types';

export default function (state=[], action) {

    switch (action.type) {
        case SAVE_COMPONENT:
            return [ ...state, action.payload ];
        
        case FETCH_DATA:
              
            const info = action.payload.data.map(profile => profile.name);
            
            return [ ...state, ...info];
           
        default: 
            return state;
    }
}