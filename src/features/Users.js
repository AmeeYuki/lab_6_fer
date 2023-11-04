import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../shared/ListOfUser";
export const userSlice = createSlice({
  name: "UsersData",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload); // Write code for addUser function
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
