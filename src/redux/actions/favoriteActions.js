import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFavorite } from '../reducers/favoriteReducers';

const url = "http://10.0.2.2:3000/favorites";

export const fetchFavorites = () => {
    return async dispatch => {
        try {
            fetch(url).then(res => res.json()).then((data) => {
                data.forEach(row => {
                    dispatch(addFavorite(row));
                });
            }).catch(err => console.log(err))
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
};

export const addFavoriteAPI = createAsyncThunk(
    'favorite/addFavoriteAPI',
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

export const deleteFavoriteApi = createAsyncThunk(
    'favorite/deleteFavoriteApi',
    async (id, thunkAPI) => {
      try {
        // Gửi yêu cầu DELETE đến API để xóa todo
        const response = await fetch(`${url}/${id}`, {
          method: 'DELETE',
        });
        // console.log(response);
        if (response.ok) {
            // console.log(response);
          // Sau khi xóa thành công, trả về id của todo đã xóa để cập nhật store
          // action.payload ở trong reducer sẽ chính là id
           return id; 
        } else {
          // Nếu có lỗi từ phía server, trả về lỗi cho reducer
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra 
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );