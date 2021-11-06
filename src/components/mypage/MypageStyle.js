import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';

export const HistoryCard = styled.View`
  flex-direction: row;
  width: ${responsiveScreenWidth(88.2)}px;
  height: ${responsiveScreenHeight(9.47)}px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;
