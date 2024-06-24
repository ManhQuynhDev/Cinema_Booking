import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "../reducers/movieReducers";
import accountReducers from "../reducers/accountReducers";
import favoriteReducers from "../reducers/favoriteReducers";
import movieWatchReducers from "../reducers/movieWatchReducers";
export default configureStore({
    reducer: {
        listMovie: movieReducers,
        listUser: accountReducers,
        listFavorite: favoriteReducers,
        listWatch: movieWatchReducers
    }
});