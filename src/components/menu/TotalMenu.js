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
import url from '../../Global';
import axios from 'axios';

const TotalMenu = ({ navigation }) => {
  const [keyArray, setKeyArrray] = useState([]);
  const [newObj, setNewObj] = useState({});
  const dataurl = url();
  const { setTotalNum, totalNum, purchaseList } = useContext(ListContext);

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
  const listFetch = async () => {
    const list = await getList();
    temp = list.data.body['result'];
    setNewObj(temp);
    setKeyArrray(Object.keys(temp));
  };

  useEffect(() => {
    listFetch();
  }, []);

  const Date = moment().format('YYYY.MM.DD');
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
            {Date}
          </CustomText>
        </DateWrapper>
        <FoodWrapper>
          {console.log(keyArray)}
          {keyArray.map(
            (content, index) => (
              console.log(newObj),
              (
                <FoodCard
                  key={index}
                  name={content}
                  num={newObj[`${content}`]}
                />
              )
            )
          )}
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
