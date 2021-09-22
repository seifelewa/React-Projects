import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { JobContext } from "../contexts/jobContext";

const JobTable = () => {
  const { jobs } = useContext(JobContext);
  const classes = makeStyles({
    table: {
      width: 650,
      overflowY: "scroll",
    },
  });
  return (
    <div className="wow">
      <TableContainer component={Paper}>
        <Table className={classes.table} id="table2" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Job Name</TableCell>
              <TableCell align="right">Pay Rate</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">Apply Now</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell component="th" scope="emp">
                  {job.type}
                </TableCell>
                <TableCell align="right">{job.pay_Rate} $/hr</TableCell>
                <TableCell align="right">{job.level}</TableCell>
                <TableCell align="right">
                  <text className="jobApplyBt">Apply</text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default JobTable;
