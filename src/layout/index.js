import React from 'react';
import Header from './header';
import Footer from './footer';


const layout = ({ header = true, footer = true, children }) => {
    return (
        <div>
            {header && <Header />}
            {children}
            {footer && <Footer />}
        </div>
    );
}


export default layout;