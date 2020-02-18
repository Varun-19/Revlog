import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    formElements : {
        userName : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'Username'
            },
            value : '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false
        },
        password : {
            type : 'password',
            config : {
                type : 'password',
                placeholder : 'Password'
            },
            value : '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
        }
    },
    auth : {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    }
};

const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }

    return isValid;
}

const onChange = (state,action) => {
    return  {
        ...state,
        'formElements' : {
            ...state.formElements,
           [action.id] : {
                ...state.formElements[action.id],
                value : action.event.target.value,
                valid: checkValidity( action.event.target.value, state.formElements[action.id].validation)
            }
        }
    }
}

const setAuthRedirectPath = (state, action) => {
    return {
        ...state,
        "auth" : {
            ...state.auth,
            authRedirectPath : action.path
        }
    }
}


const authStart = ( state, action ) => {
    return {
        ...state, 
            'auth' : {
                ...state.auth,
                error: null,
                loading: true
            }
    }
};

const authSuccess = (state, action) => {
     return {
        ...state, 
            'auth' : {
                ...state.auth,
                error: null,
                loading: false
            }
    } 
};

const authFail = (state, action) => {
    return {
        ...state, 
            'auth' : {
                ...state.auth,
                error: action.error,
                loading: false
            }
    }
};

const authLogout = (state, action) => {
    return {
        ...state, 
            'auth' : {
                ...state.auth,
                token: null,
                userId: null
            }
    }
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.onChange : return onChange(state,action)
        case actionTypes.authStart: return authStart(state, action);
        case actionTypes.authSuccess: return authSuccess(state, action);
        case actionTypes.authFail: return authFail(state, action);
        case actionTypes.authLogout: return authLogout(state, action);
        case actionTypes.setAuthRedirect: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;