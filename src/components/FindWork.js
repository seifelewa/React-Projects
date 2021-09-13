import React, { Component } from 'react';

class FindWork extends React.Component {
    render() { 
        return (
            <div className='find-work'>
                <table>
                    <tr>
                        <th><li className='major'>Development &amp; IT</li></th>
                    </tr>
                    <tr>
                        <th><li className='major'>Creative &amp; Design </li></th> 
                        <th><button> <li className='minor'> Digital Marketing </li> </button></th>
                        <th><button> <li className='minor'> Market Research </li> </button></th>
                    </tr>
                    <tr>
                        <th><li className='major'>Sales &amp; Marketing </li></th> 
                        <th><button> <li className='minor'> Marketing Strategy </li> </button></th>
                        <th><button> <li className='minor'> Sales &amp; Business Development </li> </button></th>
                    </tr>
                    <tr>
                        <th><li className='major'>Writing &amp; Translation</li></th>
                    </tr>
                </table>
            </div>
        );
    }
}
 
export default FindWork;