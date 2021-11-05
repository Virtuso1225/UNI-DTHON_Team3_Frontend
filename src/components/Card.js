import React from 'react';
import { Text } from 'react-native';
import { ListContext } from '../context/List';
import {
  CardWrapper,
  ImageSection,
  Image,
  TitleSection,
  Title,
  SubTitle,
  AddButton,
} from './CardStyle';

const Card = ({ props }) => {
  const menuTitle = props.title;
  const subTitle = props.subTitle;
  return (
    <CardWrapper>
      <AddButton />
      <ImageSection>{/* <Image></Image> */}</ImageSection>
      <TitleSection>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{menuTitle}</Title>
      </TitleSection>
    </CardWrapper>
  );
};

export default Card;
