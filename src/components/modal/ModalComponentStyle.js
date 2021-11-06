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
  height: ${responsiveScreenHeight(73.62)}px;
  border-radius: 11px;
  background-color: #fefcf9;
  align-items: center;
`;

export const TitleSection = styled.View`
  margin-top: ${responsiveScreenHeight(3.67)}px;
  width: ${responsiveScreenWidth(71.58)}px;
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
  position: absolute;
  bottom: 20px;
`;

export const RowWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-top: ${responsiveScreenHeight(4.62)}px;
`;

export const CloseWrapper = styled.Pressable`
  position: absolute;
  top: 10px;
  right: 10px;
`;
