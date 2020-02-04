import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    formElements : {
        userName : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'Username'
            },
            value : ''
        },
        password : {
            type : 'password',
            config : {
                type : 'password',
                placeholder : 'Password'
            },
            value : ''
        }
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.onChange : 
            return {
                ...state,
                'formElements' : {
                    ...state.formElements,
                   [action.id] : {
                        ...state.formElements[action.id],
                        value : action.event.target.value
                    }
                }
            }
        

        default : return state;
    }
 
}
export default reducer;