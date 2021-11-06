import React, { useEffect, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import Recipes from '../components/recipes/Recipes';
import Mypage from '../components/mypage/Mypage';
import { NavigationWrapper, TextWrapper } from './MainpageStyle';
import { BasketSvg, MypageSvg, RecipesSvg } from '../../assets/svg/Svg';
import MenuStack from './MenuStack';

const Tab = createBottomTabNavigator();

const Mainpage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#f9f7f4',
          shadowOffset: {
            height: -10,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
          shadowColor: 'rgba(222, 215, 202, 0.37)',
          border: 'none',
          height: responsiveScreenHeight(10.42),
        },
      }}
    >
      <Tab.Screen
        name="Recipe"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavigationWrapper>
              {focused ? <RecipesSvg /> : <RecipesSvg />}
              <TextWrapper activated={focused}>레시피</TextWrapper>
            </NavigationWrapper>
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Home"
        component={MenuStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavigationWrapper>
              {focused ? <BasketSvg /> : <BasketSvg />}
              <TextWrapper activated={focused}>장바구니</TextWrapper>
            </NavigationWrapper>
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavigationWrapper>
              {focused ? <MypageSvg /> : <MypageSvg />}
              <TextWrapper activated={focused}>지난 기록</TextWrapper>
            </NavigationWrapper>
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default Mainpage;
