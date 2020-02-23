import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    returnElements : {
        dealerCode : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'Dealer Code'
            },
            value : '',
        },
        SBU : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'SBU'
            },
            value : '',
        }
    },
    invoice1 : {
        type : 'text',
        config : {
            type : 'text',
            placeholder : 'Invoice No'
        },
        value : '',
        product1 : {
            name : {
                type : 'text',
                config : {
                    type : 'text',
                    placeholder : 'Product Name'
                },
                value : '',
            },
            modelNo : {
                type : 'text',
                config : {
                    type : 'text',
                    placeholder : 'Model Number'
                },
                value : '',
            },
            quantity : {
                type : 'text',
                config : {
                    type : 'text',
                    placeholder : 'Complaint Qty'
                },
                value : '',
            }
        },
        prdQty : 1
    },
    invQty : 1,
};

const invoice = {
    invoice : {
        type : 'text',
        config : {
            type : 'text',
            placeholder : 'Invoice No'
        },
        value : '',
        productAll : {

        },
        productQuantity : 1
    }
}

const product = {
    product : {
        name : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'Product Name'
            },
            value : '',
        },
        modelNo : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'Model Number'
            },
            value : '',
        },
        quantity : {
            type : 'text',
            config : {
                type : 'text',
                placeholder : 'Complaint Qty'
            },
            value : '',
        }
    }
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.addInvoice : 
            return {
                ...state,
            }
        default : return state;
    }
}
export default reducer;