import * as React from "react";
import Typography from "@mui/material/Typography";
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Stack, Button } from "@mui/material";

export default function MainTable(props) {
  const { headers, data } = props;
  return (
    <TableContainer sx={{ backgroundColor: "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontFamily: "Syne", fontWeight: 400 }}>
          <TableRow>
            {headers.map((header, index) => {
              if (index === headers.length - 1) {
                return (
                  <TableCell align="right">
                    <Typography variant="h4">{header}</Typography>
                  </TableCell>
                );
              } else {
                return (
                  <TableCell>
                    <Typography variant="h4">{header}</Typography>
                  </TableCell>
                );
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row[0]}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {row.map((col) => (
                <TableCell>
                  <Typography variant="subtitle1">{col}</Typography>
                </TableCell>

              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function TableWithAction(props) {
  const { headers, data, actions } = props;
  return (
    <TableContainer sx={{ backgroundColor: "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontFamily: "Syne", fontWeight: 400 }}>
          <TableRow>
            {headers.map((header, index) => {
                return (
                  <TableCell>
                    <Typography variant="h4">{header}</Typography>
                  </TableCell>
                );
              })}
            <TableCell>
              <Typography variant="h4">Aksi</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row[0]}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {row.map((col) => (
                <TableCell>
                  <Typography variant="subtitle1">{col}</Typography>
                </TableCell>
              ))}
              <TableCell>
                {actions.map((col) => (
                  <Button>
                    {col}
                  </Button>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}