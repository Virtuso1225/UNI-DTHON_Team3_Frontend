import React, { useState } from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { Image, Text } from 'react-native';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import { useContext } from 'react/cjs/react.development';
import { ListContext } from '../../context/List';
import { CustomText } from '../CustomText';
import { CardWrapper, LeftWrapper, PriceWrapper } from './FoodCardStyle';

const FoodCard = ({ name, num }) => {
  console.log({ name, num });
  return (
    <CardWrapper>
      <LeftWrapper />
      <PriceWrapper>
        <CustomText
          size={responsiveScreenFontSize(2.1)}
          font="Bold"
          color="#000000"
        >
          {name} {num}개
        </CustomText>
      </PriceWrapper>
    </CardWrapper>
  );
};

export default FoodCard;
