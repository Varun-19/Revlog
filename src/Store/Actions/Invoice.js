import * as actionTypes from './ActionTypes';

export const invoiceOnChange = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}