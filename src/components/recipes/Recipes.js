import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListContext } from '../../context/List';
import RecipeCard from '../card/RecipeCard';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
} from '../menu/MenuStyle';

const Recipes = () => {
  return (
    <ListContext.Consumer>
      {({ purchaseList }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>레시피 탐색</PageHeader>
          </HeaderSection>
          <BodySection>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {purchaseList.map((content) => (
                <RecipeCard
                  key={content.id}
                  title={content.title}
                  subTitle={content.subTitle}
                />
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
    paddingLeft: 17,
    paddingRight: 17,
  },
});
export default Recipes;
