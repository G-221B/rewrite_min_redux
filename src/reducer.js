import { ACTION_TYPE } from './constants';
import { initState } from './state';

export function reducer(state = initState, action = {}) {
    switch (action.type) {
        case ACTION_TYPE.ADD:
            return {
                ...state,
                count: state.count + 1
            };
        case ACTION_TYPE.MINUS:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
} 