import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ScrollView, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  BackgroundWrapper,
  BodySection,
  HeaderSection,
  PageHeader,
  SubmitButton,
} from './MenuStyle';
import ModalComponent from '../modal/ModalComponent';
import url from '../../Global';
import Toggle from '../toggleButton/Toggle';
import { ListContext, ProgressContext } from '../../context';
import Spinner from '../..';

const Menu = ({ navigation }) => {
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
      setTimeout(spinner.stop, 800);
    }
  };

  useEffect(() => {
    ListFetch();
  }, []);

  return (
    <BackgroundWrapper>
      {inProgress ? <Spinner /> : <></>}
      <HeaderSection>
        <PageHeader>메뉴 담기</PageHeader>
      </HeaderSection>
      <BodySection>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {menuList.map((content) => (
            <View key={content._id} value={content}>
              <ModalComponent props={content} />
            </View>
          ))}
        </ScrollView>
      </BodySection>
      <SubmitButton onPress={() => navigation.navigate('TotalNuturient')}>
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
export default Menu;
