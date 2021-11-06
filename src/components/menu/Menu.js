import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { Animated, ScrollView, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { BasketWhiteSvg } from '../../../assets/svg/Svg';
import { ListContext } from '../../context/List';
import {
  BackgroundWrapper,
  BasketButton,
  BodySection,
  HeaderSection,
  ListNum,
  ListNumContainer,
  PageHeader,
  SubmitButton,
  MiniMenu,
  Revoke,
  CountContainer,
} from './MenuStyle';
import ModalComponent from '../modal/ModalComponent';
import url from '../../Global';
import { CustomText } from '../CustomText';
import toggle from '../toggleButton/Toggle';
import Toggle from '../toggleButton/Toggle';

const Menu = ({ navigation }) => {
  const axios = require('axios');
  const url = url;

  const getList = async () => {
    try {
      return await axios.get(
        'http://4eb1-210-108-88-230.ngrok.io/food/getallfood'
      );
    } catch (error) {
      console.error(error);
    }
  };
  const { menuList, setMenuList } = useContext(ListContext);
  const ListFatch = async () => {
    const list = await getList();
    setMenuList(list.data.body);
  };

  useEffect(() => {
    ListFatch();
    console.log('dddddd');
    menuList.map((c) => console.log(c.name));
  }, []);

  return (
    <BackgroundWrapper>
      <HeaderSection>
        <PageHeader>메뉴 담기</PageHeader>
      </HeaderSection>
      <BodySection>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {menuList.map((content) => (
            <View key={content._id} value={content}>
              <ModalComponent props={content} />
            </View>
          ))}
        </ScrollView>
      </BodySection>
      <SubmitButton onPress={() => navigation.navigate('TotalNuturient')}>
        <Icon name="chevron-right" size={35} color="#877160" />
      </SubmitButton>
      <Toggle />
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingLeft: 17,
    paddingRight: 17,
  },
});
export default Menu;
