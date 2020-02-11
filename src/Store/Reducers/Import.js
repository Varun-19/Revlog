import * as actionTypes from '../Actions/ActionTypes';

const init = {
    show : false
}

const reducer = (state = init,action) => {
    switch(action.type) {
        case actionTypes.modalOpen :
            return {
                ...state,
                show : true
            }
        case actionTypes.modalClosed :
            return {
                ...state,
                show : false
            }
        default : return state
    } 
}
export default reducer;