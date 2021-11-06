import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mypage from '../components/Mypage';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mypage"
        component={Mypage}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
