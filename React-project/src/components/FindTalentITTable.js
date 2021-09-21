import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmpContextProvider from '../contexts/employeeContext';
import EmpTable from './empTable';

class FindTalentITTable extends Component {
    render() { 
        return (
            <div className='find-talent'>
                <h1> Find Talent </h1>
                    <ul>
                        <Link className='link' to="/find-talent-it"> <li className='major'>Development &amp; IT</li> </Link>
                        <Link className='link' to="/find-talent-creative"> <li className='major'>Creative &amp; Design </li> </Link>
                        <Link className='link' to="/find-talent-sales"> <li className='major'>Sales &amp; Marketing </li> </Link>
                        <Link className='link' to="/find-talent-writing"> <li className='major'>Writing &amp; Translation</li> </Link>
                        <div className="test"> 
                        <EmpContextProvider>
                            <EmpTable className="employeeTable"/>
                        </EmpContextProvider>
                        </div>
                    </ul>
                
            </div>
        );
    }
}
 
export default FindTalentITTable;
