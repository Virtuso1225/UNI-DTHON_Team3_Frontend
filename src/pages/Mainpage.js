import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../components/Menu';

const Tab = createBottomTabNavigator();

const Mainpage = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#f9f7f4',
          shadowOffset: {
            height: -10,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
          shadowColor: 'rgba(222, 215, 202, 0.37)',
          border: 'none',
          height: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Menu}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <NavigationWrapper>
        //       {focused ? (
        //         <ActivatedMegaphone />
        //       ) : (
        //         <Megaphone
        //           widthProp={18.78}
        //           heightProp={18.59}
        //           colorProp="#404040"
        //         />
        //       )}
        //       <TextWrapper activated={focused}>공지사항</TextWrapper>
        //     </NavigationWrapper>
        //   ),
        //   unmountOnBlur: true,
        // }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Mainpage;
