import styled from 'styled-components/native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const NutrientsSection = styled.View`
  width: ${responsiveScreenWidth(71.58)}px;
  height: ${responsiveScreenHeight(14.5)}px;
  background-color: rgba(242, 196, 127, 0.27);
  border-radius: 13px;
  margin-top: ${responsiveScreenHeight(2.72)}px;
  align-items: center;
`;

export const NutrientSWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: ${responsiveScreenWidth(63.58)}px;
  height: ${responsiveScreenHeight(7)}px;
  margin-top: ${responsiveScreenHeight(2.36)}px;
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 10px;
  margin-bottom: ${responsiveScreenHeight(1.42)}px;
`;

export const ColumnWrapper = styled.View``;

export const Nutrient = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const Calorie = styled.View`
  width: ${responsiveScreenWidth(63.58)}px;
  flex-direction: row-reverse;
`;
