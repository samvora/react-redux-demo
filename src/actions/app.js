/*** Action Creators ***/
export const AppTypes = {
    INCREMENT: 'INCREMENT',
    ASYNC_INCREMENT: 'ASYNC_INCREMENT',
    DECREMENT: 'DECREMENT',
    ASYNC_DECREMENT: 'ASYNC_DECREMENT',
}

// Action for incrementing count synchronously
const increment = (payload) => ({
    type: AppTypes.INCREMENT,
    payload
});


const decrement = (payload) => ({
    type: AppTypes.DECREMENT,
    payload
});

const asyncIncrement = payload => ({
    type: AppTypes.ASYNC_INCREMENT,
    payload
})
const asyncDecrement = payload => ({
    type: AppTypes.ASYNC_DECREMENT,
    payload
})

export const AppActions = {
    increment,
    decrement,
    // async
    asyncDecrement,
    asyncIncrement,
}