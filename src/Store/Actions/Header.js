import * as actionTypes from './ActionTypes';

const onselect = (event,id) =>  {
    return {
        type : actionTypes.onChange,
        event : event,
        id : id
    }
}

export {
    onselect
}