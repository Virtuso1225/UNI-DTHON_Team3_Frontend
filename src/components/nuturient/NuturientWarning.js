import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import { ListContext } from '../../context/List';
import { CustomText } from '../CustomText';

const NuturientWarning = ({ text }) => {
  return (
    <WarningSection>
      <Icon name="alert-circle" size={20} color="#942121" />
      <Warningtxt>
        <CustomText
          size={responsiveScreenFontSize(1.84)}
          font="Regular"
          color="#942121"
        >
          {text}
        </CustomText>
      </Warningtxt>
    </WarningSection>
  );
};

export default NuturientWarning;

const WarningSection = styled.View`
  width: ${responsiveScreenWidth(88.2)}px;
  height: ${responsiveScreenHeight(4.5)}px;
  background-color: rgba(148, 33, 33, 0.27);
  border-radius: 11px;
  margin-top: ${responsiveScreenHeight(1.3)}px;
  & + & {
    margin-top: ${responsiveScreenHeight(0.7)}px;
  }
  align-items: center;
  padding-left: ${responsiveScreenWidth(5.12)}px;
  flex-direction: row;
`;
const Warningtxt = styled.View`
  margin-left: ${responsiveScreenWidth(7.69)}px;
`;
