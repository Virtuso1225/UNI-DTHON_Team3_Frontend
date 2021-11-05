import styled from 'styled-components/native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const BackgroundWrapper = styled.View`
  flex: 1;
  background-color: #f9f7f4;
  align-items: center;
`;

export const HeaderSection = styled.View`
  /* border: 1px solid black; */
  height: ${responsiveScreenHeight(11.8)}px;
  width: ${responsiveScreenWidth(88.2)}px;
  justify-content: center;
`;

export const BodySection = styled.View`
  width: ${responsiveScreenWidth(88.2)}px;
  margin-top: ${responsiveScreenHeight(2.04)}px;
  padding-top: 20px;
  border: 1px solid black;
`;

export const PageHeader = styled.Text`
  font-family: Medium;
  font-size: ${responsiveScreenFontSize(2.51)}px;
  margin-top: ${responsiveScreenHeight(6.9)}px;
  color: #000000;
`;
