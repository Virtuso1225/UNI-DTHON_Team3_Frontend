import React, { useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import Card from './Card';
import {
  CenterView,
  RowWrapper,
  ButtonText,
  ModalWrapper,
  Button,
  TitleSection,
  NutrientsSection,
  AlertInfo,
  NutrientText,
  Nutrient,
  NutrientSWrapper,
  ColumnWrapper,
  Calorie,
} from './ModalComponentStyle';
import { CustomText } from './CustomText';
import { ListContext } from '../context/List';
import { useContext } from 'react';

const ModalComponent = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuTitle = props.title;
  const subTitle = props.subTitle;
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
              <NutrientsSection>
                <NutrientSWrapper>
                  <ColumnWrapper>
                    <Nutrient>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Regular"
                        color="#000000"
                      >
                        탄수화물{' '}
                      </CustomText>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Bold"
                        color="#000000"
                      >
                        120g
                      </CustomText>
                    </Nutrient>
                    <Nutrient>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Regular"
                        color="#000000"
                      >
                        단백질{' '}
                      </CustomText>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Bold"
                        color="#000000"
                      >
                        23g
                      </CustomText>
                    </Nutrient>
                  </ColumnWrapper>
                  <ColumnWrapper>
                    <Nutrient>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Regular"
                        color="#000000"
                      >
                        지방{' '}
                      </CustomText>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Bold"
                        color="#000000"
                      >
                        20g
                      </CustomText>
                    </Nutrient>

                    <Nutrient>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Regular"
                        color="#000000"
                      >
                        나트륨{' '}
                      </CustomText>
                      <CustomText
                        size={responsiveScreenFontSize(1.84)}
                        font="Bold"
                        color="#000000"
                      >
                        179mg
                      </CustomText>
                    </Nutrient>
                  </ColumnWrapper>
                </NutrientSWrapper>
                <Calorie>
                  <CustomText
                    size={responsiveScreenFontSize(1.97)}
                    font="ExtraBold"
                    color="#942121"
                  >
                    756kcal
                  </CustomText>
                </Calorie>
              </NutrientsSection>
              <AlertInfo isVisible={true}>
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
          setTotalNum();
        }}
      >
        <Card title={menuTitle} subTitle={subTitle} />
      </Pressable>
    </>
  );
};

export default ModalComponent;
