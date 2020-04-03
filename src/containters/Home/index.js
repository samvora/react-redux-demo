import Home from './Home';

import { connect } from 'react-redux';

import { AppActions } from './../../actions/app';
import { bindActionCreators } from 'redux';

// Mapping states to properties
const mapStateToProps = state => {
    return ({
        count: state.app.count,
    });
}

// Mapping action creators to properties
const mapDispatchToProps = (dispatch) => {

    const allActions = {
		...AppActions
	};
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);