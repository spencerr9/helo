import React, {Component} from 'react';
import {updateUsername} from '../../ducks/reducer';
import {updatePassword} from '../../ducks/reducer';

export default class Auth extends Component {

    // axios.post('/api/register').then((res) => {
    //     this.setState({})
    // })

    render(){
        return(
            <div>
                <h1>Auth</h1>
                <input placeholder="username" type="text" onChange={(e) => updateUsername(e.target.value)} />
                <input placeholder="password" type="text" onChange={(e) => updatePassword(e.target.value)} />
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}