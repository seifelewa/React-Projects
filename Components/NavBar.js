import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    render() { 
        return (
            <div className="nav-bar">
                <ul>
                    <Link to="/"> <li className="nav-bar-1">Aptitude<span className='s1'>Share</span> </li> </Link>
                    <Link to="/find-talent-it"> <li className="nav-bar-1"> Talent </li> </Link>
                    <Link to="/find-work-it"> <li className="nav-bar-1"> Work </li> </Link>

                    <Link to="/login"> <button className="button-1"> <li> Log In </li></button> </Link>
                    <Link to="/signup"> <button className="button-2"> <li> Sign Up </li></button> </Link>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;