import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav () {
    return (
        <div>
            <h1>NAV</h1>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}