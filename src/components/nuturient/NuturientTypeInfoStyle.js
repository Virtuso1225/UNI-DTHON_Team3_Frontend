import styled from 'styled-components/native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const NutrientsSection = styled.View`
  width: ${responsiveScreenWidth(88.2)}px;
  height: auto;
  padding: 17px;
  background-color: rgba(242, 196, 127, 0.27);
  border-radius: 13px;
  margin-top: ${responsiveScreenHeight(1.79)}px;
  align-items: center;
`;

export const NutrientSWrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: ${responsiveScreenWidth(80.25)}px;
  height: auto;
  & + & {
    margin-top: ${responsiveScreenHeight(2.36)}px;
  }
  padding-left: 2px;
  align-items: flex-end;
  margin-bottom: ${responsiveScreenHeight(1.42)}px;
`;

export const Nutrient = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const TotalNu = styled.View`
  width: ${responsiveScreenWidth(80.25)}px;
  flex-direction: row-reverse;
`;
