import React, { useState } from 'react';
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
                  {/* <Card props={content} /> */}
                </View>
              ))}
            </ScrollView>
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
