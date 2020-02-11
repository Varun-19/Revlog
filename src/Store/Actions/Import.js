import * as actionTypes from './ActionTypes';

const modalOpen = () =>  {
    return {
        type : actionTypes.modalOpen,
    }
}

const modalClosed = () =>  {
    return {
        type : actionTypes.modalClosed,
    }
}

export {
    modalOpen,
    modalClosed
}