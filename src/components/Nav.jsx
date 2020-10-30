import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <ul class="nav justify-content-center">
              <h3 style={{ marginLeft: '400px'}} >GitHub Users</h3>
              <li class="nav-item" style={{ marginLeft: '400px'}}>
                    <Link to='/' className="nav-link active" > Home Page </Link>
                </li>
                <li class="nav-item">
                    <Link to='/about' className="nav-link" > About </Link>
                </li>
            </ul>
        </nav>
        
         )
}
