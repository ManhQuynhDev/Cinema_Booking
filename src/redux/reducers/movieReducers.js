import { createSlice } from "@reduxjs/toolkit";
//Khai báo

const initialState = {
    listMovie: []
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie(state, action) {
            state.listMovie.push(action.payload);
        },
    },

})

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;