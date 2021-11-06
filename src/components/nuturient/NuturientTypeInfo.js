import React from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { ListContext } from '../../context/List';
import { CustomText } from '../CustomText';
import {
  Nutrient,
  NutrientsSection,
  NutrientSWrapper,
  TotalNu,
} from './NuturientTypeInfoStyle';

const NuturientInfo = ({ nulist, type, sum }) => {
  return (
    <NutrientsSection>
      <NutrientSWrapper>
        {nulist.map((content) => (
          <Nutrient key={content.index}>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Regular"
              color="#000000"
            >
              {content.subtitle} {content.title} {type}{' '}
            </CustomText>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Bold"
              color="#000000"
            >
              {content.value}
            </CustomText>
          </Nutrient>
        ))}
      </NutrientSWrapper>
      <TotalNu>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="ExtraBold"
          color={type === '총열량' ? '#942121' : '#000000'}
        >
          {type} {sum}
        </CustomText>
      </TotalNu>
    </NutrientsSection>
  );
};

export default NuturientInfo;
