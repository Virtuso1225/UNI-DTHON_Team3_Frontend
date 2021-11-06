import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { Animated, ScrollView, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { CustomText } from '../CustomText';

const Menu = ({ navigation }) => {
  const [click, setClick] = useState(false);
      
  // const axios = require('axios');
  // const url = url;

  // const getList = async () => {
  //   try {
  //     return await axios.get(`${url}/food/getallfood`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const ListFatch = async () => {
  //   const list = await getList();

  //   if (list.data.message) {
  //     console.log(`${Object.entries(list.data.message).length}입니다.`);
  //   }
  // };

  // useEffect(()=>{

  //   ListFatch();

  // },[]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { purchaseList, setPurchaseList, totalNum, menuList, setTotalNum } =
    useContext(ListContext);
  const setVisible = () => {
    Animated.timing(fadeAnim, {
      toValue: responsiveScreenWidth(86.6),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const setInvisible = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const reduceCount = (index) => {
    const content = {
      ...purchaseList[index],
      count: purchaseList[index].count - 1,
    };

    setPurchaseList([
      ...purchaseList.slice(0, index),
      content,
      ...purchaseList.slice(index + 1),
    ]);

    setTotalNum(totalNum - 1);
  };
  return (
    <BackgroundWrapper>
      <HeaderSection>
        <PageHeader>메뉴 담기</PageHeader>
      </HeaderSection>
      <BodySection>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {menuList.map((content) => (
            <View key={content.id} value={content}>
              <ModalComponent props={content} />
            </View>
          ))}
        </ScrollView>
      </BodySection>
      <SubmitButton onPress={() => navigation.navigate('TotalNuturient')}>
        <Icon name="chevron-right" size={35} color="#877160" />
      </SubmitButton>
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          height: responsiveScreenWidth(15),
          width: fadeAnim,
          backgroundColor: 'rgba(255, 255, 255, 0.91)',
          position: 'absolute',
          bottom: 15,
          right: 10,
          borderRadius: responsiveScreenWidth(7.5),
          paddingLeft: 4,
        }}
      >
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            alignItems: 'center',
            width: responsiveScreenWidth(86.6),
          }}
        >
          {purchaseList &&
            purchaseList.map((content) => (
              <MiniMenu
                key={content.id}
                value={content}
                isVisible={content.count}
              >
                <Revoke onPress={() => reduceCount(content.id)}>
                  <Icon name="x" size={10} color="white" />
                </Revoke>
                <CountContainer>
                  <ListNum>{content.count}</ListNum>
                </CountContainer>
                <CustomText size={9} font="Regular" color="#877160">
                  {content.subTitle}
                </CustomText>
                <CustomText size={11} font="Regular" color="#000000">
                  {content.title}
                </CustomText>
              </MiniMenu>
            ))}
        </ScrollView>
      </Animated.View>
      <BasketButton
        value={click}
        onPress={() => {
          setClick(!click);
          !click ? setVisible() : setInvisible();
        }}
      >
        <ListNumContainer isVisible={click}>
          <ListNum>{totalNum}</ListNum>
        </ListNumContainer>
        {click ? (
          <Icon name="x" size={30} color="#877160" />
        ) : (
          <BasketWhiteSvg />
        )}
      </BasketButton>
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
