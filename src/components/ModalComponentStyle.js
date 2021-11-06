import styled from 'styled-components/native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.View`
  width: ${responsiveScreenWidth(84.35)}px;
  height: ${responsiveScreenHeight(63.62)}px;
  border-radius: 11px;
  background-color: #fefcf9;
  align-items: center;
`;

export const TitleSection = styled.View`
  margin-top: ${responsiveScreenHeight(3.67)}px;
  width: ${responsiveScreenWidth(71.58)}px;
`;

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
export const AlertInfo = styled.View`
  width: ${responsiveScreenWidth(71.58)}px;
  height: ${responsiveScreenHeight(4.5)}px;
  background-color: rgba(148, 33, 33, 0.27);
  border-radius: 11px;
  margin-top: ${responsiveScreenHeight(1.3)}px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  padding-left: ${responsiveScreenWidth(5.12)}px;
  flex-direction: row;
`;

export const IngredientSection = styled.View`
  width: ${responsiveScreenWidth(71.58)}px;
  margin-top: ${responsiveScreenHeight(3.79)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${responsiveScreenFontSize(1.97)}px;
  color: #ffffff;
  font-family: Regular;
`;

export const Button = styled.Pressable`
  width: ${responsiveScreenWidth(71.58)}px;
  height: ${responsiveScreenHeight(6)}px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  box-shadow: 8px 8px 20px rgba(222, 215, 202, 0.57);
`;

export const RowWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${responsiveScreenHeight(4.62)}px;
`;
