export default function reducer(state,action){
    switch (action.type){
        case 'SELECT_HEADER_TAB' :
            var newState = Object.assign({}, state);
			newState.selectedHeaderTab =  action.value;
            return newState;
        case 'SELECT_LINK_HEADER' :
        	var newState = Object.assign({}, state);
            newState.selectedLink =  action.value;
            return newState;
    }
    return state;
}