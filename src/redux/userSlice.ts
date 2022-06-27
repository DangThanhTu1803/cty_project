import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "./type";

const initialState: userInfo = {
    userName: 'lequynhaivan01',
    fullName: 'Lê Quỳnh Ái Vân',
    phoneNumber: '0123456789',
    email: 'admin@abc.com',
    password: 'abcxyz',
    role: 0,
    avatar: 'https://data.whicdn.com/images/228714327/original.jpg'
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, actions) => {
            state.email = actions.payload.email
        },
        logout: (state) => {
            state.email = ""
        }
    },
})
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;