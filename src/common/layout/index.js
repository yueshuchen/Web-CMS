import React, { Component } from 'react';

import NormalLoginForm from '../login-side/';
import './index.css';

class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NormalLoginForm />

                {this.props.children}
            </div>

        );
    }
}

export default Layout;
