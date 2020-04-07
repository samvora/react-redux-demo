import Home from './Home';
import withStore from '../../hocs/withStore';

// const rootState = useContext(RootContext);
// console.log(rootState, 'rootState');

const mapStateToprops = (rootState) => {
    return {
        test: rootState.test,
    };

}

// export default Home;
export default withStore(mapStateToprops)(Home);