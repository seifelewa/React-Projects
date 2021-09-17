import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FindTalentIT extends React.Component {
    render() { 
        return (
            <div className='find-talent'>
                <h1> Find Talent </h1>
                <ul>
                    <Link to="/find-talent-it"> <li className='major'>Development &amp; IT</li> </Link>
                    <Link to="/find-talent-creative"> <li className='major'>Creative &amp; Design </li> </Link>
                    <Link to="/find-talent-sales"> <li className='major'>Sales &amp; Marketing </li> </Link>
                    <Link to="/find-talent-writing"> <li className='major'>Writing &amp; Translation</li> </Link>

                    <button className='minor-1'> <li> Back-end Development </li> </button>
                    <button className='minor-2'> <li> Front-end Development </li> </button>
                    <button className='minor-3'> <li> Mobile App Development </li> </button>
                    <button className='minor-4'> <li> Full Stack Development </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindTalentIT;
