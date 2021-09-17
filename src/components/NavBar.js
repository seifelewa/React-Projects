import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return (
            <div className="nav-bar">
                <ul>
                    <li className="nav-bar-1">Aptitude<span className='s1'>Share</span> </li>
                    <li className="nav-bar-1"> Talent </li>
                    <li className="nav-bar-1"> Work </li>

                    <button className="button-1"> <li> Log In </li></button>
                    <button className="button-2"> <li> Sign Up </li></button>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;