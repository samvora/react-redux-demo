// withTheme.js

import React, { useContext, useMemo } from "react";
import RootContext from "../contexts/RootContext";

const withStore = (mapStateToProps = () => { }) => {

    // return (BaseComponent) => {
    //     const UpdatedPropsComponent = (p = {}) => {
    //         const { state, actions } = useContext(RootContext);
    //         const props = mapStateToProps(state);

    //         return <BaseComponent {...p} {...props} actions={actions} />
    //     }
    //     return UpdatedPropsComponent;
    // }


    return (BaseComponent) => {
        const UpdatedPropsComponent = (p = {}) => {
            const { state, actions } = useContext(RootContext);
            const contextPropState = mapStateToProps(state);

            return useMemo(() => {
                // The rest of your rendering logic
                return <BaseComponent {...p} {...contextPropState} actions={actions} />;
            }, [...Object.values(p), ...Object.values(contextPropState)])
            // return <BaseComponent {...p} {...props} actions={actions} />
        }
        return UpdatedPropsComponent;
    }


    // return (BaseComponent) => {
    //     const UpdatedPropsComponent = (p = {}) => (
    //         <RootContext.Consumer>
    //             {(contexts) => {
    //                 console.log(contexts, 'contextscontextscontexts');
    //                 const { state, actions } = contexts;
    //                 const props = mapStateToProps(state);
    //                 return <BaseComponent newProps={props}
    //                 // actions={actions} 
    //                 />

    //             }}
    //         </RootContext.Consumer>
    //     );
    //     return UpdatedPropsComponent;
    // }


    // return function ThemeComponent(props) {
    //     return (
    //         <ThemeContext.Consumer>
    //             {(contexts) => <Component {...props} {...contexts} />
    //             }
    //         </ThemeContext.Consumer>
    //     )
    // }
}


// const withStore = (props = {}) => (BaseComponent) => 

export default withStore;