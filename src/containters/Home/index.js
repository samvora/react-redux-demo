import Home from './Home';
import { addTodoSuccess, addTodo } from '../../actions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
    return {
        mAddToDo: (data) => dispatch(addTodo(data))
    };
};

const mapStateToProps = (state) => {
    return {
        todos: state.app.todos
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;