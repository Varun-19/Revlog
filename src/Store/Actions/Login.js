import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const onChange = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}

export const authStart = () => {
    return {
        type: actionTypes.authStart
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.authSuccess,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.authFail,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.authLogout
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        };
        axios.post('http://localhost:5000/login', authData)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(authSuccess(response.data.oken));
                dispatch(setAuthRedirect('/revlog'));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirect = (path) => {
    return {
        type: actionTypes.setAuthRedirect,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};
