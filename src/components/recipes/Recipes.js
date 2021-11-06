import axios from 'axios';
import React, { useContext } from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { ListContext } from '../../context/List';
import url from '../../Global';
import RecipeCard from '../card/RecipeCard';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
} from '../menu/MenuStyle';

const Recipes = () => {
  const dataurl = url();
  const getList = async () => {
    try {
      return await axios.get(`${dataurl}/food/getallfood`);
    } catch (error) {
      console.error(error);
    }
  };

  const { menuList, setMenuList } = useContext(ListContext);

  const ListFatch = async () => {
    const list = await getList();
    setMenuList(list.data.body);
  };

  useEffect(() => {
    ListFatch();
  }, []);

  return (
    <ListContext.Consumer>
      {({ menuList }) => (
        <BackgroundWrapper>
          <HeaderSection>
            <PageHeader>레시피 탐색</PageHeader>
          </HeaderSection>
          <BodySection>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {menuList.map((content) => (
                <RecipeCard
                  key={content._id}
                  title={content.name}
                  subTitle={content.subname}
                  
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
