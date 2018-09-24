import axios from 'axios';

import { SAVE_COMPONENT, FETCH_DATA } from 'actions/types';

export function saveComponent(component) {
    return {
        type: SAVE_COMPONENT,
        payload: component
    };
}

export function fetchData() {

    const request = axios.get('http://jsonplaceholder.typicode.com/comments');

    return ({

        type: FETCH_DATA,
        payload: request 

    });
                        
}