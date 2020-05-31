import React from 'react';

import Navbar from 'components/Navbar';

function Layout(props) {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Navbar title="PHONEBOOK"/>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;