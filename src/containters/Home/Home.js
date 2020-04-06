import React, { useState, useReducer, useEffect } from 'react';
import Layout from '../../layout';
import axios from 'axios';

const Home = () => {

    console.log('Home')
    const [filter, setFilter] = useState({
        search: '',
        currentPage: 1,
        perPage: 5,
        totalPages: 0,
        filterTodos: [],
    });
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // it will be called only when component first time render
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            setTodos(res.data);
        });
    }, []);

    useEffect(() => {
        let updatedFilteredTodos = todos.filter(todo => {
            if (filter.search !== '') {
                return todo.title.includes(filter.search);
            }
            else {
                return true;
            }
        });
        let totalPages = Math.ceil(updatedFilteredTodos.length / filter.perPage);
        if (updatedFilteredTodos.length > 0) {
            updatedFilteredTodos = updatedFilteredTodos.splice(filter.perPage * (filter.currentPage - 1), filter.perPage);
        }

        setFilter((prevFilter) => {
            return { ...prevFilter, filterTodos: updatedFilteredTodos, totalPages }
        });
    }, [filter.search, todos, filter.currentPage,filter.perPage]);


    const handleSerach = (event) => {
        const newValue = event.target.value;
        setFilter({ ...filter, search: newValue, currentPage: 1 });
    };




    const totalPagesArray = Array.from({ length: filter.totalPages }, (_, index) => index + 1);

    const paginationComponent = totalPagesArray.map(pageNumber => {
        return <div onClick={() => changePage(pageNumber)} key={[pageNumber]}>{pageNumber}</div>
    })

    const changePage = (nextPage) => {
        setFilter({ ...filter, currentPage: nextPage });
    }



    return (
        <Layout searchChange={handleSerach}>
            <div>
                <input type="text" onChange={handleSerach} value={filter.search} />
                {/* <Counter initialCount={1} /> */}
            </div>
            <table>
                <thead><tr><th>{filter.currentPage}</th></tr></thead>
                <tbody>
                    {filter.filterTodos.map((todo, index) => {
                        return (
                            <tr key={index}><td>{todo.title}</td></tr>
                        );
                    })}
                    <tr>
                        <td>
                            {paginationComponent}
                        </td>
                    </tr>
                </tbody>

            </table>

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