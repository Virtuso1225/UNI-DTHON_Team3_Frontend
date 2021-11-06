import styled from 'styled-components/native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const RowView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: ${responsiveScreenWidth(63.58)}px;
  margin-top: 18px;
  margin-left: 20px;
  justify-content: space-between;
`;

export const IngredientRowView = styled.View`
  width: ${responsiveScreenWidth(28.46)}px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;
