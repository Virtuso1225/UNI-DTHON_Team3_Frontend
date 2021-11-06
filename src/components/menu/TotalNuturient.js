import React, { useState, useEffect, useContext } from 'react';
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
import NuturientTypeInfo from '../nuturient/NuturientTypeInfo';
import NuturientWarning from '../nuturient/NuturientWarning';

const TotalNuturient = ({ navigation }) => {
  const [click, setClick] = useState(false);
  const [calory, setCalory] = useState([
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
  ]);
  const [tan, setTan] = useState([
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
    { subtitle: '새콤달콤', title: '김치볶음밥', value: 123 },
  ]);
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
  const [warninglist, setWarninglist] = useState([
    '열량이 높은 음식이예요',
    '나트륨 함량이 높은 음식이예요',
  ]);

  return (
    <ListContext.Consumer>
      {({ purchaseList, totalNum }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>영양 정보</PageHeader>
          </HeaderSection>
          <BodySection>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <NuturientTypeInfo
                nulist={calory}
                type="총 열량"
                sum={totalCal}
              />
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
export default TotalNuturient;
