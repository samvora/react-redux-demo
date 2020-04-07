import React from 'react';
import RootContext from '../../contexts/RootContext';


class GlobalStore extends React.Component {

    state = {
        ...(this.props.initialState || {}),
    };

    getGlobalStore = () => {
        return this.state;
    };

    setGlobalStore = (cb) => {
        this.setState(cb);
    };

    render() {
        const actions = {
            getGlobalStore: this.getGlobalStore,
            setGlobalStore: this.setGlobalStore,
        }
        const storeValue = {
            state: { ...this.state },
            actions,
        }
        return (
            <RootContext.Provider value={storeValue}>
                {this.props.children}
            </RootContext.Provider >
        );
    }
}
export default GlobalStore;