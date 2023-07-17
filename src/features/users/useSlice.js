import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        userLogin: {}
    },
    reducers: {
        remove: (state, action) => {
            state.users = state.users.filter(item => item.id != action.payload)
        },
        update: (state, action) => {

        },

        setAll: (state, actions) => {
            state.users = actions.payload
        }
    }
})

export const {remove, update, setAll} = userSlice.actions
export default userSlice.reducer;