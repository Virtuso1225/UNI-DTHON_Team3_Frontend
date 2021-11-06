import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../components/menu/Menu';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mypage"
        component={Menu}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
