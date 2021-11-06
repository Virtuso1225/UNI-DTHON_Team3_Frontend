import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ListContext } from '../../context/List';
import Card from '../card/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
} from '../menu/MenuStyle';
import { CustomText } from '../CustomText';
import { HistoryCard } from './MypageStyle';

const Mypage = () => {
  const [data, setData] = useState({});
  const [keyArray, setKeyArrray] = useState([]);
  // const [history, setHistory] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        const temp = JSON.parse(value);
        console.log(temp);
        setData(temp);
        setKeyArrray(Object.keys(temp));
      }
    } catch (e) {
      // error reading value
    }
  };

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //   } catch (e) {
  //     // remove error
  //   }

  //   console.log('Done.');
  // };

  useEffect(() => {
    getData();
    // removeValue();
  }, []);

  return (
    <BackgroundWrapper>
      <HeaderSection>
        <PageHeader>내 기록</PageHeader>
      </HeaderSection>
      <BodySection>
        <ScrollView>
          {keyArray.map((content, index) => (
            <View key={index} value={content}>
              <HistoryCard>
                <CustomText size={12} font="Medium" color="black">
                  {content}
                </CustomText>
                <CustomText size={12} font="Medium" color="black">
                  외 {keyArray.length - 1}
                </CustomText>
              </HistoryCard>
            </View>
          ))}
        </ScrollView>
      </BodySection>
    </BackgroundWrapper>
  );
};

export default Mypage;
