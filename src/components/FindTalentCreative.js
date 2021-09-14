import React, { Component } from 'react';

class FindTalentCreative extends React.Component {
    render() { 
        return (
            <div className='find-talent-creative'>
                <h1> Find Talent </h1>
                <ul>
                    <li className='major'>Development &amp; IT</li>
                    <li className='major'>Creative &amp; Design </li>
                    <li className='major'>Sales &amp; Marketing </li>
                    <li className='major'>Writing &amp; Translation</li>

                    <button className='minor-1'> <li> Logo Design</li> </button>
                    <button className='minor-2'> <li> Image Editing </li> </button>
                    <button className='minor-3'> <li> Video Editing </li> </button>
                    <button className='minor-4'> <li> Motion Graphics </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindTalentCreative;