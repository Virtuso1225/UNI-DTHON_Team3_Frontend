import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import url from '../../Global';
import RecipeCard from '../card/RecipeCard';
import { ListContext, ProgressContext } from '../../context';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
} from '../menu/MenuStyle';
import Spinner from '../..';

const Recipes = () => {
  const { spinner, inProgress } = useContext(ProgressContext);

  const dataurl = url();
  const getList = async () => {
    try {
      return await axios.get(`${dataurl}/food/getallfood`);
    } catch (error) {
      console.error(error);
    }
  };

  const { menuList, setMenuList } = useContext(ListContext);

  const ListFetch = async () => {
    try {
      spinner.start();
      const list = await getList();
      setMenuList(list.data.body);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(spinner.stop, 2000);
    }
  };

  useEffect(() => {
    ListFetch();
  }, []);

  return (
    <BackgroundWrapper>
      {inProgress ? <Spinner /> : <></>}

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
