import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class UserDetail extends Component {

    state = {
        userId: null
    };

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('getDerivedStateFromProps', nextProps, prevState);
    //     return null
    // }

    componentDidMount() {
        this.handleIdChange();

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const snapshot = {};
        snapshot.isUserIdChanged = prevProps.match.params.id !== this.props.match.params.id;
        return snapshot;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.isUserIdChanged) {
            this.handleIdChange();
        }
    }

    handleIdChange = () => {

        setTimeout(() => {
            this.setState({
                userId: this.props.match.params.id
            });
        }, 3000);

    }

    render() {
        console.log('UserDetail');

        return <div>
            <div>User</div>
            <div>
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <Link key={(index + 1)} to={'/users/' + (index + 1)}>{(index + 1)}</Link>
                    );
                })}
            </div>
            {this.props.match.params.id}-
            {this.state.userId}
        </div>
    }

}

export default UserDetail;