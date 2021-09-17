import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EmpContext } from '../contexts/employeeContext';
import {v1 as uuidv1} from "uuid";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const EmpTable = () =>{
    const {emps} = useContext(EmpContext);
    const classes = makeStyles({
        table: {
          width: 650,
          overflowY: "scroll",
        },
      });
    return (
        <div >
            <TableContainer component={Paper}>
            <Table className={classes.table} id="table1" aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Freelancer Name</TableCell>
                    <TableCell align="right">Average Rate</TableCell>
                    <TableCell align="right">Jobs Completed</TableCell>
                    <TableCell align="right">Rating</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {emps.map((emp) => (
                    <TableRow key={uuidv1()}>
                    <TableCell component="th" scope="emp">
                        {emp.name}
                    </TableCell>
                    <TableCell align="right">{emp.rate} $/hr</TableCell>
                    <TableCell align="right">{emp.jobCount}</TableCell>
                    <TableCell align="right">
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                <   Rating name="read-only" value={emp.rating} readOnly />
                                </Box>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  );
}
export default EmpTable;