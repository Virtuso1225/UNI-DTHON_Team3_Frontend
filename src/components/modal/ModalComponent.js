import React, { useState, useContext } from 'react';
import { Modal, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Close from 'react-native-vector-icons/Feather';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import Card from '../card/Card';
import {
  CenterView,
  RowWrapper,
  ButtonText,
  ModalWrapper,
  Button,
  TitleSection,
  AlertInfo,
  CloseWrapper,
  IngredientSection,
} from './ModalComponentStyle';
import { CustomText } from '../CustomText';
import { ListContext } from '../../context/List';
import NuturientInfo from '../nuturient/NuturientInfo';
import { Ingredient, SubIngredient } from '../ingredient/Ingredient';
import url from '../../Global';
import { useEffect } from 'react/cjs/react.development';

const ModalComponent = ({ props }) => {
  const dataurl = url();
  const subTitle = props.subname;
  const menuTitle = props.name;
  const [mainIngre, setMainIngre] = useState(['']);
  const [subIngre, setSubIngre] = useState(['']);
  const [nutrition, setNutrition] = useState([0]);
  const getList = async () => {
    try {
      return await axios.get(`${dataurl}/food/getfooddata/${menuTitle}`);
    } catch (error) {
      console.error(error);
    }
  };

  const ListFetch = async () => {
    const list = await getList();
    setNutrition(list.data.body.nutrition);
    setMainIngre(list.data.body.ingredients);
    setSubIngre(list.data.body.sauce);
  };

  useEffect(() => {
    ListFetch();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const { purchaseList, setPurchaseList, setTotalNum, totalNum } =
    useContext(ListContext);

  const purchaseListInsert = () => {
    const index = purchaseList.findIndex(
      (content) => content._id === props._id
    );
    const content = {
      ...purchaseList[index],
      count: purchaseList[index].count + 1,
    };

    setPurchaseList([
      ...purchaseList.slice(0, index),
      content,
      ...purchaseList.slice(index + 1),
    ]);
  };
  return (
    <>
      <View>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <CenterView onPress={() => setModalVisible(!modalVisible)}>
            <ModalWrapper onPress={() => {}}>
              <CloseWrapper onPress={() => setModalVisible(!modalVisible)}>
                <Close name="x" size={30} color="#877160" />
              </CloseWrapper>
              <TitleSection>
                <CustomText
                  size={responsiveScreenFontSize(3.42)}
                  font="Bold"
                  color="#877160"
                >
                  {subTitle}
                </CustomText>
                <CustomText
                  size={responsiveScreenFontSize(3.95)}
                  font="Bold"
                  color="#000000"
                >
                  {menuTitle}
                </CustomText>
              </TitleSection>
              <NuturientInfo nutrition={nutrition} />
              <AlertInfo isVisible>
                <Icon name="alert-circle" size={20} color="#942121" />
                <CustomText
                  size={responsiveScreenFontSize(1.58)}
                  font="Regular"
                  color="#942121"
                >
                  {'  '}
                  열량이 높고 비타민이 부족해요.
                </CustomText>
              </AlertInfo>
              <IngredientSection>
                <CustomText
                  size={responsiveScreenFontSize(2.37)}
                  font="ExtraBold"
                  color="#000000"
                >
                  재료
                </CustomText>
                <Ingredient mainIngre={mainIngre} />
              </IngredientSection>
              <IngredientSection>
                <CustomText
                  size={responsiveScreenFontSize(2.37)}
                  font="ExtraBold"
                  color="#000000"
                >
                  부재료
                </CustomText>
                <SubIngredient subIngre={subIngre} />
              </IngredientSection>
              <Button
                color="#877160"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTotalNum(totalNum + 1);
                  purchaseList
                    ? purchaseList.findIndex(
                        (content) => content._id === props._id
                      ) !== -1
                      ? purchaseListInsert()
                      : setPurchaseList([
                          ...purchaseList,
                          { ...props, count: 1 },
                        ])
                    : setPurchaseList([{ ...props, count: 1 }]);
                }}
              >
                <ButtonText>장바구니 추가하기</ButtonText>
              </Button>
            </ModalWrapper>
          </CenterView>
        </Modal>
      </View>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Card props={props} />
      </Pressable>
    </>
  );
};

export default ModalComponent;
