import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BasketWhiteSvg } from '../../assets/svg/Svg';
import { ListContext } from '../context/List';
import Card from './Card';
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
import ModalComponent from './ModalComponent';

const Menu = () => {
  const [click, setClick] = useState(false);
  const { purchaseList, totalNum, setPurchaseList, setTotalNum } =
    useContext(ListContext);

  const initialize = async () => {
    await setPurchaseList([
      { id: 0, title: '김치볶음밥', subTitle: '매콤달콤' },
      { id: 1, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
      { id: 2, title: '김치볶음밥', subTitle: '매콤달콤' },
      { id: 3, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
      { id: 4, title: '김치볶음밥', subTitle: '매콤달콤' },
      { id: 5, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
      { id: 6, title: '김치볶음밥', subTitle: '매콤달콤' },
      { id: 7, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
    ]);
    await setTotalNum(8);
  };
  useEffect(() => {
    initialize();
    console.log(purchaseList);
    console.log('hi');
  }, []);
  return (
    <BackgroundWrapper>
      <HeaderSection>
        <PageHeader>메뉴 담기</PageHeader>
      </HeaderSection>
      <BodySection>
        {/* <ScrollView contentContainerStyle={styles.contentContainer}>
          {purchaseList.map((content) => (
            <View key={content.id} value={content}>
              <ModalComponent props={content} />
            </View>
          ))}
        </ScrollView> */}
      </BodySection>
      <SubmitButton>
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
