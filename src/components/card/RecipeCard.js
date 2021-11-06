import axios from 'axios';
import React, { useState } from 'react';
import { Image, Linking, Text } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useEffect } from 'react/cjs/react.development';
import url from '../../Global';
import {
  CardWrapper,
  ImageSection,
  TitleSection,
  Title,
  SubTitle,
  Wrapper,
} from './CardStyle';

const RecipeCard = ({ title, subTitle }) => {
  const [recipe, setRecipe] = useState('');
  const dataurl = url();
  const getList = async () => {
    try {
      return await axios.get(`${dataurl}/food/getrecipe/${title}`);
    } catch (error) {
      console.error(error);
    }
  };

  const ListFatch = async () => {
    const list = await getList();
    setRecipe(list.data.body.message);
  };

  useEffect(() => {
    ListFatch();
  }, []);

  return (
    <Wrapper onPress={() => Linking.openURL(recipe)}>
      <CardWrapper>
        <ImageSection>
          <Image
            style={{
              flex: 1,
              height: responsiveScreenHeight(15.4),
              width: responsiveScreenWidth(38.71),
              borderTopLeftRadius: 13,
              borderTopRightRadius: 13,
            }}
            source={{
              uri: `${dataurl}/static/${title}.jpg`,
              method: 'GET',
            }}
            resizeMode="cover"
          />
        </ImageSection>
        <TitleSection>
          <SubTitle>{subTitle}</SubTitle>
          <Title>{title}</Title>
        </TitleSection>
      </CardWrapper>
    </Wrapper>
  );
};

export default RecipeCard;
