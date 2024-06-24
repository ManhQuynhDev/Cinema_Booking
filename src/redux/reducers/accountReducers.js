import { createSlice } from "@reduxjs/toolkit";
import { addUserAPI } from "../actions/userActions";
//Khai báo

const initialState = {
    listUser: []
}
const userSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        addUser(state, action) {
            state.listUser.push(action.payload);
        },
        extraReducers: builder => {
            builder.addCase(addUserAPI.fulfilled, (state, action) => {
                console.log('Expense added:', action.payload);
            }).addCase(addUserAPI.rejected, (state, action) => {
                console.log('Add expense rejected:', action.error.message);
            })
        },
    },
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;