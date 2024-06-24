import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTab from './src/view/MyTab';
import MovieDetailsScreen from './src/view/MovieDetailsScreen';
import {MyTheme} from './src/Themes/MyThemes';
import ReViewDetailsScreen from './src/view/ReViewDetailsScreen';
import LoginScreen from './src/view/LoginScreen';
import RegisterScreen from './src/view/RegisterScreen';
import SettingScreen from './src/view/SettingScreen';
import FavoriteScreen from './src/view/FavoriteScreen';
import BookingScreen from './src/view/BookingScreen';
import SeatsScreen from './src/view/SeatsScreen';
import PaymentScreen from './src/view/PaymentScreen';
import DetailsTicket from './src/view/DetailsTicket';
import WelComeScreen from './src/view/WelComeScreen';
import {Provider} from 'react-redux';
import ForgetPassWord from './src/view/ForgetPassWord';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={MyTab} />
        <Stack.Screen name="Details" component={MovieDetailsScreen} />
        <Stack.Screen name="ReView" component={ReViewDetailsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="SelectSeats" component={SeatsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="DetailsTicket" component={DetailsTicket} />
        <Stack.Screen name="Forget" component={ForgetPassWord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
{/* <Stack.Screen name="WelCome" component={WelComeScreen} /> */}

const App = () => {
  return (
    <MyTheme>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </MyTheme>
  );
};

export default App;

const styles = StyleSheet.create({});
