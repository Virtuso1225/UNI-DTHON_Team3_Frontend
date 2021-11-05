import React, { useState } from 'react';
import { Text } from 'react-native';
import { ListContext } from '../context/List';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import {
  CardWrapper,
  ImageSection,
  Image,
  TitleSection,
  Title,
  SubTitle,
  AddButton,
} from './CardStyle';

const Card = ({ title, subTitle }) => {
  return (
    <CardWrapper>
      <AddButton>
        <PlusIcon name="plus" size={20} color="white" />
      </AddButton>
      <ImageSection>{/* <Image></Image> */}</ImageSection>
      <TitleSection>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </TitleSection>
    </CardWrapper>
  );
};

export default Card;
