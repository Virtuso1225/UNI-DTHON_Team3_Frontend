import React, { useState } from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { Image, Text } from 'react-native';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import { useContext } from 'react/cjs/react.development';
import { ListContext } from '../../context/List';
import { CustomText } from '../CustomText';
import { CardWrapper, LeftWrapper, PriceWrapper } from './FoodCardStyle';

const FoodCard = ({ name, num, price }) => {
  const TotalPrice = num * price;
  return (
    <CardWrapper>
      <LeftWrapper></LeftWrapper>

      <PriceWrapper>
        <CustomText
          size={responsiveScreenFontSize(2.1)}
          font="Bold"
          color="#000000"
        >
          {name} {num}개
        </CustomText>
        <CustomText
          size={responsiveScreenFontSize(1.9)}
          font="Bold"
          color="#6B6B6B"
        >
          {TotalPrice}\
        </CustomText>
      </PriceWrapper>
    </CardWrapper>
  );
};

export default FoodCard;
