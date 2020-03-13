import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.onSelect : 
            return state;
        default : return state;
    }
    
}

export default reducer;