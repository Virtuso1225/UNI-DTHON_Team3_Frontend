import styled from 'styled-components/native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const CardWrapper = styled.View`
  width: ${responsiveScreenWidth(88.2)}px;
  align-items: center;
  height: ${responsiveScreenHeight(8.88)}px;
`;

export const LeftWrapper = styled.View``;
export const PriceWrapper = styled.View`
  align-items: flex-end;
  margin-left: ${responsiveScreenWidth(35.1)}px;
`;
