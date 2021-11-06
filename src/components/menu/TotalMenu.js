import React, { useState, useEffect, useContext } from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { ScrollView, View, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BasketWhiteSvg } from '../../../assets/svg/Svg';
import { ListContext } from '../../context/List';
import {
  BackBtn,
  BackgroundWrapper,
  HeaderSection,
  DateWrapper,
  PageHeader,
  SaveBtn,
  FoodWrapper,
} from './MenuStyle';
import { CustomText } from '../CustomText';
import FoodCard from '../food/FoodCard';
import moment from 'moment';

const TotalMenu = ({ navigation }) => {
  const [foods, setFoods] = useState([
    { id: 0, name: '대파', num: 1, price: 1250 },
    { id: 1, name: '양파', num: 2, price: 1000 },
  ]);
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };
  const Date = moment().format('YYYY.MM.DD');
  return (
    <ListContext.Consumer>
      {({ purchaseList, totalNum }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>내 장바구니</PageHeader>
          </HeaderSection>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <DateWrapper>
              <CustomText
                size={responsiveScreenFontSize(1.58)}
                font="Medium"
                color="#877160"
              >
                {Date}
              </CustomText>
            </DateWrapper>
            <FoodWrapper>
              {foods.map((content) => (
                <FoodCard
                  key={content.id}
                  name={content.name}
                  num={content.num}
                  price={content.price}
                />
              ))}
            </FoodWrapper>
            <SaveBtn onPress={() => _storeData()}>
              <CustomText
                size={responsiveScreenFontSize(1.97)}
                font="Regular"
                color="#FFFFFF"
              >
                장바구니 저장하기
              </CustomText>
            </SaveBtn>
            <BackBtn onPress={() => navigation.navigate('TotalNuturient')}>
              <CustomText
                size={responsiveScreenFontSize(1.97)}
                font="Regular"
                color="#877160"
              >
                뒤로 가기
              </CustomText>
            </BackBtn>
          </ScrollView>
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
export default TotalMenu;
