import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../containters/Home';




class MainRoutes extends React.Component {

    state={
        sL:'t',
    };

    render() {
        console.log('MainRoutes',this.state,this.props)
        return (
            <Switch>
                <Route exact path='/'
                    // render={(matchProps) => <App {...matchProps} />}
                    component={Home}
                />
                <Route exact path='/test'
                    component={Home}
                />
                <Route
                    component={Home}
                />

            </Switch>
        );
    }
}

export default MainRoutes;
