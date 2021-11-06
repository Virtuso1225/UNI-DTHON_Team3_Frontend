import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import { useContext } from 'react/cjs/react.development';
import { ListContext } from '../context/List';
import {
  CardWrapper,
  ImageSection,
  TitleSection,
  Title,
  SubTitle,
  AddButton,
} from './CardStyle';

const Card = ({ title, subTitle }) => {
  const { setTotalNum, totalNum } = useContext(ListContext);

  return (
    <CardWrapper>
      <AddButton onPress={() => setTotalNum(totalNum + 1)}>
        <PlusIcon name="plus" size={20} color="white" />
      </AddButton>
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

export default Card;
