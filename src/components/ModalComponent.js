import React, { useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import Card from './Card';
import {
  CenterView,
  RowWrapper,
  ButtonText,
  ModalWrapper,
  Button,
  TitleSection,
  SubTitle,
  Title,
  NutrientsSection,
  AlertInfo,
  NutrientText,
} from './ModalComponentStyle';
import { CustomText } from './CustomText';

const ModalComponent = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuTitle = props.title;
  const subTitle = props.subTitle;
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
              <TitleSection>
                <CustomText
                  size={responsiveScreenFontSize(3.42)}
                  font={Bold}
                  color="#877160"
                >
                  {subTitle}
                </CustomText>
                <Title>{menuTitle}</Title>
              </TitleSection>
              <NutrientsSection>
                <NutrientText>탄수화물</NutrientText>
              </NutrientsSection>
              <AlertInfo isVisible={true} />
              <Button
                color="#877160"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <ButtonText>장바구니 추가하기</ButtonText>
              </Button>
            </ModalWrapper>
          </CenterView>
        </Modal>
      </View>
      <Pressable onPress={() => setModalVisible(true)}>
        <Card title={menuTitle} subTitle={subTitle} />
      </Pressable>
    </>
  );
};

export default ModalComponent;
