import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addUser } from "../features/Users"; // Assuming this is where your Redux action is defined
import { useFormik } from "formik";
import * as Yup from "yup";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AddUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      username: Yup.string()
        .required("Required.")
        .email("Must be 2 characters or more"),
    }),
  });

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleAddUser = () => {
    // Dispatch the addUser action with user data
    dispatch(addUser({ id: 0, name, username }));

    // Clear the input fields after adding the user
    setName("");
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Paper>
          <Stack spacing={1}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(event) => {
                setUsername(event.target.value); // Cập nhật state username
                formik.handleChange(event); // Gọi hàm handleChange của formik nếu cần thiết
              }}
            />
            {formik.errors.name && (
              <Typography variant="caption" color="red">
                {formik.errors.name}
              </Typography>
            )}

            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value); // Cập nhật state username
                formik.handleChange(event); // Gọi hàm handleChange của formik nếu cần thiết
              }}
            />
            {formik.errors.username && (
              <Typography variant="caption" color="red">
                {formik.errors.username}
              </Typography>
            )}

            <CardActions>
              <Grid
                item
                container
                xs={12}
                alignItems="flex-end"
                direction="column"
              >
                <Grid item>
                  <Button type="submit" onClick={handleAddUser}>
                    Add user
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Stack>
        </Paper>
      </form>
    </div>
  );
}
