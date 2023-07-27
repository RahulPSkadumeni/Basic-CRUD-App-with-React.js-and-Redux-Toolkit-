import { createSlice } from "@reduxjs/toolkit";

const user = [
  {
    name: "Rahul P S",
    email: "rhaulps995@gmail.com",
    id: 1,
  },
  {
    name: "Ankita K A",
    email: "ankitakaur0876@yahoo.co.in",
    id: 2,
  },
  {
    name: "Suresh M Bhattarai",
    email: "sureshmbrt345@hotmail.com",
    id: 3,
  },
  {
    name: "Nikhil V Rao",
    email: "nikhilsrao@outlook.com",
    id: 4,
  },
];

const userSlice = createSlice({
  name: "users",
  initialState: {
    user,
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    },

    updateUser: (state, action) => {
      console.log(action.payload);
      const { id, name, email } = action.payload;
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === id ? { ...user, name: name, email: email } : user
        ),
      };
    },

    deleteUser: (state, action) => {
      let idToDelete = action.payload;
      console.log("payload", action.payload);
      console.log("firstidToDelete", idToDelete);
      return {
        ...state,
        user: state.user.filter((user) => user.id !== idToDelete),
      };
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
