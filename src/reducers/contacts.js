//Добавляем массив контактов
import data from '../data.js';
export default function contacts(state = data,action) {
    if(action.type==='ADD_CONTACT'){
        return [
            ...state,
            action.payload
        ];
    }
    if(action.type==='FETCH_CONTACT_SUCCESS'){
        return action.payload;
    }
    return state;
}