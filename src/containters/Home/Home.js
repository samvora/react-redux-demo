import React, { useState, useReducer } from 'react';
import Layout from '../../layout';

const Home = (props) => {


    const todos = props.todos;

    if (todos.length < 1) {
        props.mAddToDo({ title: 'test', userId: '1' });
    }

    console.log('Home', props, todos)
    const [search, setSearch] = useState('');

    const handleSerach = (event) => {
        const newValue = event.target.value;
        setSearch(newValue);
    }

    return (
        <Layout>
            <div>
                <input type="text" onChange={handleSerach} value={search} />
                <Counter initialCount={1} />
            </div>

        </Layout>
    );
}


function init(initialCount) {
    console.log(initialCount);
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    console.log('Counter');
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Reset
        </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}



export default Home;