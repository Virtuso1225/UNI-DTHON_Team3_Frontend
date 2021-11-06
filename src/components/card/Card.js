import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import { useContext } from 'react/cjs/react.development';
import { ListContext } from '../../context/List';
import {
  CardWrapper,
  ImageSection,
  TitleSection,
  Title,
  SubTitle,
  AddButton,
} from './CardStyle';

const Card = ({ props }) => {
  const { setTotalNum, totalNum, setPurchaseList, purchaseList } =
    useContext(ListContext);
  const subTitle = props.subTitle;
  const title = props.title;

  const purchaseListInsert = () => {
    const index = purchaseList.findIndex((content) => content.id === props.id);
    const content = {
      ...purchaseList[index],
      count: purchaseList[index].count + 1,
    };

    setPurchaseList([
      ...purchaseList.slice(0, index),
      content,
      ...purchaseList.slice(index + 1),
    ]);
  };
  return (
    <CardWrapper>
      <AddButton
        onPress={() => {
          setTotalNum(totalNum + 1);
          purchaseList
            ? purchaseList.findIndex((content) => content.id === props.id) !==
              -1
              ? purchaseListInsert()
              : setPurchaseList([...purchaseList, { ...props, count: 1 }])
            : setPurchaseList([{ ...props, count: 1 }]);
        }}
      >
        <PlusIcon name="plus" size={20} color="white" />
      </AddButton>
      <ImageSection>
        <Image
          style={{
            flex: 1,
            height: responsiveScreenHeight(15.4),
            width: responsiveScreenWidth(38.71),
          }}
          source={require('../../../assets/icon.png')}
          resizeMode="cover"
        />
      </ImageSection>
      <TitleSection>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </TitleSection>
    </CardWrapper>
  );
};

export default Card;
