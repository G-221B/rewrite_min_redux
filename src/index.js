import { ACTION_TYPE } from './constants';
import { createStore } from './redux';
import { reducer } from './reducer';

const minus_btn = document.querySelector('.minus');
const add_btn = document.querySelector('.add');
const count_el = document.querySelector('.count');

const store = createStore(reducer);

store.subscribe(() => {
    render();
})


function init() {
    render();
    bindEvent();
}

function render() {
    const state = store.getState();
    count_el.innerText = state.count;
}

function bindEvent() {
    minus_btn.addEventListener('click', () => handleBtnClick(ACTION_TYPE.MINUS));
    add_btn.addEventListener('click', () => handleBtnClick(ACTION_TYPE.ADD))
}

function handleBtnClick(type) {
    switch(type) {
        case ACTION_TYPE.ADD: 
            store.dispatch({ type: ACTION_TYPE.ADD });
            break;
        case ACTION_TYPE.MINUS: 
            store.dispatch({ type: ACTION_TYPE.MINUS });
            break;
    }
}

init();