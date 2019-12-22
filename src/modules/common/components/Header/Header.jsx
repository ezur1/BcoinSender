import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../../../../logo.svg';

export default function Header(user) {
        return(
            <header className="App-header space-between">
                <Link to={'/'} className="flex align-c">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>BcoinSender</h3>
                </Link>
                <div className="nav-links">
                    <Link to={'/contact'}>
                    <i className="fas fa-users"></i>
                    </Link>
                    <Link to={'/'}>
                        
                    </Link>
                </div>
            </header>
        )
}
