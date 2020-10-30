import React from 'react'
import Nav from './Nav';
import Footer from './Footer';

function layout(props) {
    return (
        <div>
            <Nav title ={props.title} />
                {props.children}
            <Footer />
        </div>
    )
}

export default layout
