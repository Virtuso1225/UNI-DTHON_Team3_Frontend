import React from 'react';
import { ScrollView, View } from 'react-native';
import { ListContext } from '../context/List';
import Card from './Card';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
} from './MenuStyle';

const Mypage = () => {
  return (
    <ListContext.Consumer>
      {({ purchaseList }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>메뉴 담기</PageHeader>
          </HeaderSection>
          <BodySection>
            {/* <ScrollView>
              {purchaseList.map((content) => (
                <View key={content.id} value={content}>
                  <Card props={content} />
                </View>
              ))}
            </ScrollView> */}
          </BodySection>
        </BackgroundWrapper>
      )}
    </ListContext.Consumer>
  );
};

export default Mypage;
