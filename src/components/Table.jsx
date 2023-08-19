import * as React from "react";
import Typography from "@mui/material/Typography";
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell } from '@mui/material';


export default function MainTable(props) {
    const { data } = props;
  return (
    <TableContainer sx={{backgroundColor: 'white'}}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ fontFamily: "Syne", fontWeight: 400}}>
        <TableRow>
          <TableCell align="left">Name</TableCell>
          <TableCell>Commodity</TableCell>
          <TableCell>Total Slot</TableCell>
          <TableCell>Price</TableCell>
          <TableCell align="right">Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.name}
            sx={{ 
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell align="left">
              <img src={require('../assets/Profile.png')} alt="Profile pic" width={20}>
              </img>
              {row.name}
            </TableCell>
            <TableCell>{row.commodity}</TableCell>
            <TableCell>{row.slot}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell align="right">{row.date.toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
