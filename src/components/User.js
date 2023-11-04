import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUsername } from "../features/Users";

export default function BasicTable() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsernames, setNewUsernames] = React.useState({});

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                <Avatar>H</Avatar>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{user.name}</Typography>
                <Typography variant="body2">{user.username}</Typography>
              </TableCell>
              <TableCell>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  onChange={(e) =>
                    setNewUsernames({
                      ...newUsernames,
                      [user.id]: e.target.value,
                    })
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    dispatch(
                      updateUsername({
                        id: user.id,
                        username: newUsernames[user.id],
                      })
                    );
                  }}
                  variant="contained"
                >
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
