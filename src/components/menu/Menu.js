import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ScrollView, View, StyleSheet } from 'react-native';
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
} from './MenuStyle';
import ModalComponent from '../modal/ModalComponent';
import url from '../../Global';

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

  return (
    <ListContext.Consumer>
      {({ purchaseList, totalNum }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>메뉴 담기</PageHeader>
          </HeaderSection>
          <BodySection>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {purchaseList.map((content) => (
                <View key={content.id} value={content}>
                  <ModalComponent props={content} />
                </View>
              ))}
            </ScrollView>
          </BodySection>
          <SubmitButton onPress={() => navigation.navigate('TotalNuturient')}>
            <Icon name="chevron-right" size={35} color="#877160" />
          </SubmitButton>
          <BasketButton
            value={click}
            onPress={() => {
              setClick(!click);
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
      )}
    </ListContext.Consumer>
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
