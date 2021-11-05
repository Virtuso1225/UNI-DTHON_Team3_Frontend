import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListContext } from '../context/List';
import Card from './Card';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
} from './MenuStyle';

const Menu = () => {
  return (
    <ListContext.Consumer>
      {({ purchaseList }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>메뉴 담기</PageHeader>
          </HeaderSection>
          <BodySection>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {purchaseList.map((content) => (
                <View key={content.id} value={content}>
                  <Card props={content} />
                </View>
              ))}
            </ScrollView>
          </BodySection>
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
  },
});
export default Menu;
