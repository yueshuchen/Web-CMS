import React, { Component } from 'react';
import axios from 'axios';

class AuthRoute extends Component {
    componentDidMount() {
        axios.get('/api/userInfo').then(res => {
            if (res.status === 200) {
                console.log(res.data)
            }
        })

    }


    render(){
        return <p>test</p>
    }
}

export default AuthRoute;
