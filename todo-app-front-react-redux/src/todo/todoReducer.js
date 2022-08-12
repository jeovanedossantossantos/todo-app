/* eslint-disable default-case */
const INITAL_STATE = {
    description: '',
    list:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITAL_STATE, action)=>{
    switch(action.type) {
        case "DESCRIPTION_CHANGED":
            return {...state, description: action.payload}
        case "TODO_SEARCHED":
            return {...state, list: action.payload}
        case "TODO_CLEAR":
            return {...state, description: ''}
        default:
            return state
    }
}