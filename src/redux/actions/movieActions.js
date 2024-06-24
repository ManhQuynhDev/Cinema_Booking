import { createAsyncThunk } from '@reduxjs/toolkit';
import { addMovie } from '../reducers/movieReducers';

const url = "http://10.0.2.2:3000/movies";

export const fetchMovies = () => {
    return async dispatch => {
        try {
            fetch(url).then(res => res.json()).then((data) => {
                data.forEach(row => {
                    dispatch(addMovie(row));
                });
            }).catch(err => console.log(err))
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
};