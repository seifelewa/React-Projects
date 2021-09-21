import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FindTalentWriting extends React.Component {
    render() { 
        return (
            <div className='find-talent-writing'>
                <h1> Find Talent </h1>
                <ul>
                    <Link className='link' to="/find-talent-it"> <li className='major'>Development &amp; IT</li> </Link>
                    <Link className='link' to="/find-talent-creative"> <li className='major'>Creative &amp; Design </li> </Link>
                    <Link className='link' to="/find-talent-sales"> <li className='major'>Sales &amp; Marketing </li> </Link>
                    <Link className='link' to="/find-talent-writing"> <li className='major'>Writing &amp; Translation</li> </Link>

                    <button className='minor-1'> <li> Business Writing </li> </button>
                    <button className='minor-2'> <li> Language Localization </li> </button>
                    <button className='minor-3'> <li> Creative Writing </li> </button>
                    <button className='minor-4'> <li> Editing &amp; Proofreading </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindTalentWriting;
