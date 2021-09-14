import React, { Component } from 'react';

class FindTalentSales extends React.Component {
    render() { 
        return (
            <div className='find-talent-sales'>
                <h1> Find Talent </h1>
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
 
export default FindTalentSales;