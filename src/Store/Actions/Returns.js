import * as actionTypes from './ActionTypes';

export const returnsOnChange = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}