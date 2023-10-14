import * as React from "react";
import Typography from "@mui/material/Typography";
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Stack } from '@mui/material';


export default function MainTable(props) {
    const { headers, data } = props;
  return (
    <TableContainer sx={{backgroundColor: 'white'}}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ fontFamily: "Syne", fontWeight: 400}}>
        <TableRow>
            {headers.map((header, index) => {
            if (index === headers.length - 1) {
                return (
                <TableCell align="right">
                    <Typography variant="h4">
                    {header}
                    </Typography>
                </TableCell>
                )
            } else {
                return (
                <TableCell>
                    <Typography variant="h4">
                    {header}
                    </Typography>
                </TableCell>
                )
            }})}
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
              <Typography variant="h4">
                {row.name}
              </Typography>       
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                {row.commodity}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                {row.slot}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                Rp. {row.price.toLocaleString()}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                Rp. {(row.price * row.slot).toLocaleString()}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1">
                <i>{row.date.toDateString()}</i>
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
