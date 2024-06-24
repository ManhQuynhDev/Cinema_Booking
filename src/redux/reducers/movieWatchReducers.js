import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listWatch : []
}

const watchSlice = createSlice({
    name : 'watch',
    initialState,
    reducers:{
        addMovieWatch (state, action){
            state.listWatch.push( action.payload );
        },   
    }
});
// export các thành phần để bên screen có thể sử dụng
export const {addMovieWatch} = watchSlice.actions;
export default watchSlice.reducer;