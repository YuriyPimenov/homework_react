// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';
import data from './data.js';

function contacts(state = [],action) {
    if(action.type==='ADD_CONTACT'){
        return [
            ...state,
            action.name
        ];
    }
    return state;
}
const store = createStore(contacts);

//Подписываемся на изменения
store.subscribe(()=>{
    console.log('subscribe',store.getState());
});

//Создаём событие и добавляем
data.map(function(el){
    store.dispatch({type:'ADD_CONTACT',img:el.img,name:el.name,number:el.number,like:el.like,male:el.male});
});
// store.dispatch({type:'ADD_CONTACT',payload:'тест'});