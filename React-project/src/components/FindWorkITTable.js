import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JobContextProvider from '../contexts/jobContext';
import JobTable from './jobTable';

class FindWorkITTable extends Component {
    render() { 
        return (
            <div className='find-talent'>
                <h1> Find Talent </h1>
                    <ul>
                        <Link className='link' to="/find-work-it"> <li className='major'>Development &amp; IT</li> </Link>
                        <Link className='link' to="/find-work-creative"> <li className='major'>Creative &amp; Design </li> </Link>
                        <Link className='link' to="/find-work-sales"> <li className='major'>Sales &amp; Marketing </li> </Link>
                        <Link className='link' to="/find-work-writing"> <li className='major'>Writing &amp; Translation</li> </Link>
                        <div className="test"> 
                        <JobContextProvider>
                            <JobTable className="jobTable"/>
                        </JobContextProvider>
                        </div>
                    </ul>
                
            </div>
        );
    }
}
 
export default FindWorkITTable;
