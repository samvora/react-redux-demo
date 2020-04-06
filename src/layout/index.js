import React from 'react';
import Header from './header';
import Footer from './footer';


const layout = ({ header = true, searchChange, footer = true, children }) => {
    return (
        <div>
            {header && <Header searchChange={searchChange} />}
            {children}
            {footer && <Footer />}
        </div>
    );
}


export default layout;