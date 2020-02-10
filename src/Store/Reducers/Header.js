import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    headerElements : {
        zone : {
            options : [
                { value: 'all', label: 'All' },
                { value: 'north', label: 'North' },
                { value: 'south', label: 'South' },
                { value: 'east', label: 'East' },
                { value: 'west', label: 'West' }
                ],
            value : ''
        },
        priority : {
           options : [
                    { value: 'all', label: 'All' },
                    { value: 'p3', label: 'P3' },
                    { value: 'p2', label: 'P2' },
                    { value: 'p1', label: 'P1' },
                ],
            value: ''
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.onSelect : 
            return state;
        default : return state;
    }
    
}

export default reducer;