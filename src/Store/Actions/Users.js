import * as actionTypes from './ActionTypes';

export const usersOnChange = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}