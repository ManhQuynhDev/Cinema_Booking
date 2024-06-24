import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUser } from '../reducers/accountReducers';

const url = "http://10.0.2.2:3000/users";

export const fetchUsers = () => {
    return async dispatch => {
        try {
            fetch(url).then(res => res.json()).then((data) => {
                console.log(data)
                data.forEach(row => {
                    dispatch(addUser(row));
                });
            }).catch(err => console.log(err))
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
};

export const addUserAPI = createAsyncThunk(
    'user/addUserAPI',
    async (objTodo, thunkAPI) => {
        console.log(objTodo);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objTodo)
            });
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {        
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }
        } catch (error) {
            // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);