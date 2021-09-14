import React, { Component } from 'react';

class FindWorkIT extends React.Component {
    render() { 
        return (
            <div className='find-work-IT'>
                <h1> Find Work </h1>
                <ul>
                    <li className='major'>Development &amp; IT</li>
                    <li className='major'>Creative &amp; Design </li>
                    <li className='major'>Sales &amp; Marketing </li>
                    <li className='major'>Writing &amp; Translation</li>

                    <button className='minor-1'> <li> Back-end Development </li> </button>
                    <button className='minor-2'> <li> Front-end Development </li> </button>
                    <button className='minor-3'> <li> Mobile App Development </li> </button>
                    <button className='minor-4'> <li> Full Stack Development </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindWorkIT;