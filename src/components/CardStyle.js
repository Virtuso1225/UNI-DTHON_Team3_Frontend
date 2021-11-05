import styled from 'styled-components/native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const CardWrapper = styled.View`
  width: ${responsiveScreenWidth(38.71)}px;
  height: ${responsiveScreenHeight(20.88)}px;
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
  margin-bottom: ${responsiveScreenHeight(4.58)}px;
  background-color: #ffffff;
`;

export const ImageSection = styled.View`
  height: ${responsiveScreenHeight(15.4)}px;
  width: 100%;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  background-color: black;
`;

export const TitleSection = styled.View`
  height: ${responsiveScreenHeight(5.48)}px;
  width: ${responsiveScreenWidth(33.07)}px;
  align-self: center;
  justify-content: center;
`;

export const Image = styled.Image``;

export const Title = styled.Text`
  font-size: ${responsiveScreenFontSize(1.45)}px;
  font-family: Medium;
  color: #000000;
`;

export const SubTitle = styled.Text`
  font-size: ${responsiveScreenFontSize(1.18)}px;
  font-family: Regular;
  color: #877160;
`;

export const AddButton = styled.Pressable`
  width: ${responsiveScreenWidth(8.54)}px;
  height: ${responsiveScreenWidth(8.54)}px;
  border-radius: ${responsiveScreenWidth(4.26)}px;
  background-color: #f2c47f;
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
`;
