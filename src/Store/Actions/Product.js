import * as actionTypes from './ActionTypes';

export const productssOnChange = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}