import React, { Component } from 'react';

class FindTalentWriting extends React.Component {
    render() { 
        return (
            <div className='find-talent-writing'>
                <h1> Find Talent </h1>
                <ul>
                    <li className='major'>Development &amp; IT</li>
                    <li className='major'>Creative &amp; Design </li>
                    <li className='major'>Sales &amp; Marketing </li>
                    <li className='major'>Writing &amp; Translation</li>

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