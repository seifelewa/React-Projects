import React, { Component } from 'react';

class FindWork extends React.Component {
    render() { 
        return (
            <div className='find-work'>
                <h1> Find Work </h1>
                <ul>
                    <li className='major'>Development &amp; IT</li>
                    <li className='major'>Creative &amp; Design </li>
                    <li className='major'>Sales &amp; Marketing </li>
                    <li className='major'>Writing &amp; Translation</li>

                    <button className='minor-1'> <li> Digital Marketing </li> </button>
                    <button className='minor-2'> <li> Market Research </li> </button>
                    <button className='minor-3'> <li> Marketing Strategy </li> </button>
                    <button className='minor-4'> <li> Sales &amp; Business Development </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindWork;

