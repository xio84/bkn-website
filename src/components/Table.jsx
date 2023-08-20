import * as React from "react";
import Typography from "@mui/material/Typography";
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Stack } from '@mui/material';


export default function MainTable(props) {
    const { data } = props;
  return (
    <TableContainer sx={{backgroundColor: 'white'}}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ fontFamily: "Syne", fontWeight: 400}}>
        <TableRow>
          <TableCell align="left">
            <Typography variant="h4">
            Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h4">
            Commodity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h4">
            Total Slot
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h4">
            Price
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="h4">
            Date
            </Typography>
          </TableCell>
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
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <img src={require('../assets/Profile.png')} alt="Profile pic" width={20}>
              </img>
              <Typography variant="h4">
                {row.name}
              </Typography>                
            </Stack>
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
                {row.price}
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
