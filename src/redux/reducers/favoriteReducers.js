import { createSlice } from "@reduxjs/toolkit";
import { addFavoriteAPI, deleteFavoriteApi } from "../actions/favoriteActions";
//Khai báo

const initialState = {
    listFavorite: []
}
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.listFavorite.push(action.payload);
        },
        extraReducers: builder => {
            //POST
            builder.addCase(addFavoriteAPI.fulfilled, (state, action) => {
                console.log('Favorite added:', action.payload);
            }).addCase(addFavoriteAPI.rejected, (state, action) => {
                console.log('Add Favorite rejected:', action.error.message);
            })
            //DELETE
            builder.addCase(deleteFavoriteApi.fulfilled, (state, action) => {
                // Xóa todo
                 state.listFavorite = state.listFavorite.filter(row => row.id !== action.payload);
                
            }) .addCase(deleteFavoriteApi.rejected, (state, action) => {
                // Xử lý khi yêu cầu xóa todo bị từ chối hoặc xảy ra lỗi
                console.log('Delete todo rejected:', action.error.message);
            });
        },
    },
})

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;