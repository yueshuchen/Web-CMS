import React, { Component } from 'react';
import NavSide from '../nav-side/';
import NavTop from '../nav-top/';
import './index.css';

class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                <NavSide />
                <NavTop />
                {this.props.children}
            </div>

        );
    }
}

export default Layout;
