import styled from 'styled-components/native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const CardWrapper = styled.View`
  width: ${responsiveScreenWidth(78)}px;
  height: ${responsiveScreenHeight(8.88)}px;
  align-items: center;
  justify-content: center;
`;

export const LeftWrapper = styled.View``;

export const PriceWrapper = styled.View`
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;
