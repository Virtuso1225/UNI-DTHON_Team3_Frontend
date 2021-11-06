import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather';
import { ListContext } from '../../context/List';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
  SubmitButton,
} from './MenuStyle';
import NuturientTypeInfo from '../nuturient/NuturientTypeInfo';
import NuturientWarning from '../nuturient/NuturientWarning';
import Toggle from '../toggleButton/Toggle';
import url from '../../Global';

const TotalNuturient = ({ navigation }) => {
  const dataurl = url();

  const [calory, setCalory] = useState([]);
  const [tan, setTan] = useState([]);
  const [dan, setDan] = useState([
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
  ]);
  const [ji, setJi] = useState([
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
  ]);
  const [na, setNa] = useState([
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
  ]);
  const [totalCal, setTotalCal] = useState(444);
  const [totalTan, setTotalTan] = useState(444);
  const [totalDan, setTotalDan] = useState(444);
  const [totalJi, setTotalJi] = useState(444);
  const [totalNa, setTotalNa] = useState(444);
  const { setTotalNum, totalNum, purchaseList } = useContext(ListContext);

  let nameList = [];
  const handler = (content) => {
    for (let i = 0; i < content.count; i++)
      nameList = nameList.concat(content.name);
  };
  purchaseList.map((item) => handler(item));
  const str = nameList.join(',');

  const getList = async () => {
    try {
      return await axios.get(`${dataurl}/food/getfoodnut/?name=${str}`);
    } catch (error) {
      console.error(error);
    }
  };

  let newCalory = [],
    newTan = [],
    newDan = [],
    newJi = [],
    newNa = [];
  let totalCalory = 0,
    totalTansu = 0,
    totalDanb = 0,
    totalJib = 0,
    totalNat = 0;
  const ListFetch = async () => {
    const list = await getList();
    list.data.body.map((item) => {
      const cnt = purchaseList.find((item2) => item2.name === item.name).count;
      newCalory = [
        ...newCalory,
        { title: item.name, value: item.nutrition.total_carb * cnt },
      ];
      newTan = [
        ...newTan,
        { title: item.name, value: item.nutrition.carb * cnt },
      ];
      newDan = [
        ...newDan,
        { title: item.name, value: item.nutrition.protein * cnt },
      ];
      newJi = [...newJi, { title: item.name, value: item.nutrition.fat * cnt }];
      newNa = [
        ...newNa,
        { title: item.name, value: item.nutrition.salt * cnt },
      ];
      totalCalory += item.nutrition.total_carb * cnt;
      totalTansu += item.nutrition.carb * cnt;
      totalDanb += item.nutrition.protein * cnt;
      totalJib += item.nutrition.fat * cnt;
      totalNat += item.nutrition.salt * cnt;
    });
    setTotalCal(totalCalory + 'kcal');
    setTotalTan(totalTansu + 'g');
    setTotalDan(totalDanb + 'g');
    setTotalJi(totalJib + 'g');
    setTotalNa(totalNat + 'mg');

    setCalory(newCalory);
    setTan(newTan);
    setDan(newDan);
    setJi(newJi);
    setNa(newNa);
  };

  useEffect(() => {
    ListFetch();
  }, []);

  const [warninglist, setWarninglist] = useState([
    '열량이 높은 음식이예요',
    '나트륨 함량이 높은 음식이예요',
  ]);

  return (
    <BackgroundWrapper>
      <HeaderSection>
        <PageHeader>영양 정보</PageHeader>
      </HeaderSection>
      <BodySection>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <NuturientTypeInfo nulist={calory} type="총 열량" sum={totalCal} />

          <NuturientTypeInfo nulist={tan} type="탄수화물" sum={totalTan} />
          <NuturientTypeInfo nulist={dan} type="단백질" sum={totalDan} />
          <NuturientTypeInfo nulist={ji} type="지방" sum={totalJi} />
          <NuturientTypeInfo nulist={na} type="나트륨" sum={totalNa} />
          {warninglist.map((content) => (
            <NuturientWarning key={content.index} text={content} />
          ))}
        </ScrollView>
      </BodySection>
      <SubmitButton onPress={() => navigation.navigate('TotalMenu')}>
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
export default TotalNuturient;
