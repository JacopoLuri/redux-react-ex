let initialState = 0;

const counterReducer = (state = initialState, action) => {
    	switch (action.type) {
		case 'INCREMENT':
            return state + 1;
        case 'PLUSTEN':
            return state + 10;
		case 'DECREMENT':
            return state - 1;
        case 'MINUSTEN':
            return state -10;
        case 'BACKTOSTART':
            return state = initialState;
		default:
			return state;
	}
}

export default counterReducer