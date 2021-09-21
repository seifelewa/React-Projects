import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FindTalentSales extends React.Component {
    render() { 
        return (
            <div className='find-talent-sales'>
                <h1> Find Talent </h1>
                <ul>
                    <Link className='link' to="/find-talent-it"> <li className='major'>Development &amp; IT</li> </Link>
                    <Link className='link' to="/find-talent-creative"> <li className='major'>Creative &amp; Design </li> </Link>
                    <Link className='link' to="/find-talent-sales"> <li className='major'>Sales &amp; Marketing </li> </Link>
                    <Link className='link' to="/find-talent-writing"> <li className='major'>Writing &amp; Translation</li> </Link>

                    <button className='minor-1'> <li> Digital Marketing </li> </button>
                    <button className='minor-2'> <li> Market Research </li> </button>
                    <button className='minor-3'> <li> Marketing Strategy </li> </button>
                    <button className='minor-4'> <li> Sales &amp; Business Development </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindTalentSales;
