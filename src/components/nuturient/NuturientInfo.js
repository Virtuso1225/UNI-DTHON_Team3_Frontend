import React from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { CustomText } from '../CustomText';
import {
  ColumnWrapper,
  Nutrient,
  NutrientsSection,
  NutrientSWrapper,
  Calorie,
} from './NuturientInfoStyle';

const NuturientInfo = ({ nutrition }) => {
  return (
    <NutrientsSection>
      <NutrientSWrapper>
        <ColumnWrapper>
          <Nutrient>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Regular"
              color="#000000"
            >
              탄수화물{' '}
            </CustomText>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Bold"
              color="#000000"
            >
              {nutrition.carb}g
            </CustomText>
          </Nutrient>
          <Nutrient>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Regular"
              color="#000000"
            >
              단백질{' '}
            </CustomText>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Bold"
              color="#000000"
            >
              {nutrition.protein}g
            </CustomText>
          </Nutrient>
        </ColumnWrapper>
        <ColumnWrapper>
          <Nutrient>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Regular"
              color="#000000"
            >
              지방{' '}
            </CustomText>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Bold"
              color="#000000"
            >
              {nutrition.fat}g
            </CustomText>
          </Nutrient>
          <Nutrient>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Regular"
              color="#000000"
            >
              나트륨{' '}
            </CustomText>
            <CustomText
              size={responsiveScreenFontSize(1.84)}
              font="Bold"
              color="#000000"
            >
              {nutrition.salt}mg
            </CustomText>
          </Nutrient>
        </ColumnWrapper>
      </NutrientSWrapper>
      <Calorie>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="ExtraBold"
          color="#942121"
        >
          {nutrition.total_carb}kcal
        </CustomText>
      </Calorie>
    </NutrientsSection>
  );
};

export default NuturientInfo;
