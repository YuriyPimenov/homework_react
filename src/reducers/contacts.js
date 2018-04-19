//Добавляем массив контактов
import data from '../data.js';
export default function contacts(state = data,action) {
    if(action.type==='ADD_CONTACT'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}