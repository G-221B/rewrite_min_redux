let cbs = [];
let _state;

export function createStore(reducer) {
    const dispatch = createDispatch(reducer);

    dispatch();
    return {
        dispatch,
        subscribe,
        getState
    }
}


function createDispatch(reducer) {
    return function(action) {
        _state = reducer(_state,action);
        cbs.forEach(cb => cb());
    }
}

function subscribe(cb) {
    if(!cbs.includes(cb)) {
        cbs.push(cb);
    }
}

function getState() {
    return _state;
}