import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../components/menu/Menu';
import TotalNuturient from '../components/menu/TotalNuturient';
import TotalMenu from '../components/menu/TotalMenu';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="TotalNuturient"
        component={TotalNuturient}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="TotalMenu"
        component={TotalMenu}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
