import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: ${(props) => props.size}px;
  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
`;
