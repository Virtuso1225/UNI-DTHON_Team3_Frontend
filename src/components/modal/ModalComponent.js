import React, { useState, useContext } from 'react';
import { Modal, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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

const ModalComponent = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuTitle = props.title;
  const { subTitle } = props;
  const { setTotalNum, totalNum } = useContext(ListContext);
  return (
    <>
      <View>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <CenterView>
            <ModalWrapper>
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
              <NuturientInfo />
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
              </IngredientSection>
              <Button
                color="#877160"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTotalNum(totalNum + 1);
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
        <Card title={menuTitle} subTitle={subTitle} />
      </Pressable>
    </>
  );
};

export default ModalComponent;
