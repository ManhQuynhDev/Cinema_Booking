import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext, useEffect } from 'react'
const ThemeContext = createContext(); // khởi tạo context cho theme
// khi sử dụng sẽ dùng thẻ <MyTheme >....</MyTheme> để bao gói giao diện ứng dụng
// phần .... ở cấu trúc trên là thuộc tính children
export const MyTheme = ({ children }) => {
  // tạo state để lưu trạng thái chọn theme
  const [theme, setTheme] = useState('light'); // tên theme tự định nghĩa.

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };
  // tạo hàm chuyển đổi giao diện
  const toggleTheme = async () => {
    // tùy theo có nhiều mẫu giao diện thì dùng if else....
    const newTheme = theme === 'light' ? 'dark' : 'light'; 
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  }
  useEffect(() => {
    loadTheme()
  })
  // return về một theme contexxt
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext);
}
