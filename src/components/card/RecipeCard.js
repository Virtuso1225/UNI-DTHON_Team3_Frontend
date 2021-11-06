import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import {
  CardWrapper,
  ImageSection,
  TitleSection,
  Title,
  SubTitle,
} from './CardStyle';

const RecipeCard = ({ title, subTitle }) => {
  return (
    <CardWrapper>
      <ImageSection>
        {/* <Image source={require('../../assets/icon.png')} resizeMode="cover" /> */}
      </ImageSection>
      <TitleSection>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </TitleSection>
    </CardWrapper>
  );
};

export default RecipeCard;
