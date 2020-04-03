import { AppTypes } from "../actions/app";

// App initial state
const initialState = {
    count: 0,
};

// Reducer
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AppTypes.INCREMENT: {
            return incrementHandler(state, action.payload);
        }
        case AppTypes.DECREMENT: {
            return decrementHandler(state, action.payload);
            break;
        }
        default: {
            return state;
        }
    }
};

const incrementHandler = (state, payload) => {
    // Add 1 to count zg
    return {
        ...state,
        count: state.count + payload
    };
}

const decrementHandler = (state, payload) => {
    // Add 1 to count zg
    return {
        ...state,
        count: state.count - payload
    };
}