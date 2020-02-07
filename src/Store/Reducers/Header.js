import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    headerElements : {
        zone : {
            type : 'select',
            config : {
                options : [
                    {value : 'zone', display: 'Zone'},
                    {value : 'all', display: 'All'},
                    {value : 'north', display: 'North'},
                    {value : 'south', display: 'South'},
                    {value : 'east', display: 'East'},
                    {value : 'west', display: 'west'}
                ]
            },
            value : ''
        },
        priority : {
            type : 'select',
            config : {
                options : [
                    {value : 'priority', display: 'Priority'},
                    {value : 'all', display: 'All'},
                    {value : 'p3', display: 'P3'},
                    {value : 'p2', display: 'P2'},
                    {value : 'p1', display: 'P1'}
                ]
            },
            value: ''
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.onSelect : 
            console.log(state);
            return state;
        default : return state;
    }
    
}

export default reducer;