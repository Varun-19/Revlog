import * as actionTypes from './ActionTypes';

const onChange = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}

export {
    onChange
}