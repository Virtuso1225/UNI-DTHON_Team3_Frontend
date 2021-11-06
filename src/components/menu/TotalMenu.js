import React, { useState, useEffect, useContext } from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListContext } from '../../context/List';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import url from '../../Global';
import axios from 'axios';

const TotalMenu = ({ navigation }) => {
  const [keyArray, setKeyArrray] = useState([]);
  const [newObj, setNewObj] = useState({});
  const [history, setHistory] = useState({});
  const dataurl = url();
  const { setTotalNum, totalNum, purchaseList, setPurchaseList } =
    useContext(ListContext);

  let nameList = [];
  const handler = (content) => {
    for (let i = 0; i < content.count; i++)
      nameList = nameList.concat(content.name);
  };
  purchaseList.map((item) => handler(item));
  const str = nameList.join(',');

  // const _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };

  const getList = async () => {
    try {
      return await axios.get(`${dataurl}/food/getsumfoods/?name=${str}`);
    } catch (error) {
      console.error(error);
    }
  };
  let temp = {};
  const Date = moment().format();
  const listFetch = async () => {
    const list = await getList();
    temp = list.data.body['result'];
    setNewObj(temp);
    setHistory({ ...history, Date: { ...temp, date: Date } });
    setKeyArrray(Object.keys(temp));
  };

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(history);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      setPurchaseList([]);
      setTotalNum(0);
      navigation.navigate('Mypage');
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    listFetch();
  }, []);

  const SemiDate = moment().format('YYYY.MM.DD');
  return (
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
            {SemiDate}
          </CustomText>
        </DateWrapper>
        <FoodWrapper>
          {console.log(keyArray)}
          {keyArray.map((content, index) => (
            <FoodCard key={index} name={content} num={newObj[`${content}`]} />
          ))}
        </FoodWrapper>
        <SaveBtn onPress={() => storeData()}>
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
