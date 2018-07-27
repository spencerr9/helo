import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateUsername, updatePassword} from '../../ducks/reducer';
import axios from 'axios';

class Auth extends Component {

    register(){
        // const {username, password} = req.body
        axios.post('/api/register').then(res => {
            console.log(true)
        })
    }

    // axios.post('/api/register').then((res) => {
    //     this.setState({})
    // })

    render(){
        const {updateUsername, updatePassword} = this.props

        return(
            <div>
                <h1>Auth</h1>
                <input placeholder="username" type="text" onChange={(e) => updateUsername(e.target.value)} />
                <input placeholder="password" type="text" onChange={(e) => updatePassword(e.target.value)} />
                <button>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {username, password} = state;

    return {
        username,
        password
    };
}

export default connect(mapStateToProps, {updateUsername, updatePassword})(Auth);