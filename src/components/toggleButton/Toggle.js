import React, { useContext, useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { ListContext } from '../../context/List';
import { CustomText } from '../CustomText';
import {
  BasketButton,
  ListNumContainer,
  ListNum,
  MiniMenu,
  Revoke,
  CountContainer,
} from '../menu/MenuStyle';
import { BasketWhiteSvg } from '../../../assets/svg/Svg';

const Toggle = () => {
  const [click, setClick] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { purchaseList, setPurchaseList, totalNum, setTotalNum } =
    useContext(ListContext);
  const setVisible = () => {
    Animated.timing(fadeAnim, {
      toValue: responsiveScreenWidth(86.6),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const setInvisible = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const reduceCount = (index) => {
    const tempIndex = purchaseList.findIndex(
      (content) => content._id === index
    );
    const content = {
      ...purchaseList[tempIndex],
      count: purchaseList[tempIndex].count - 1,
    };

    setPurchaseList([
      ...purchaseList.slice(0, tempIndex),
      content,
      ...purchaseList.slice(tempIndex + 1),
    ]);

    setTotalNum(totalNum - 1);
  };
  return (
    <>
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          height: responsiveScreenWidth(15),
          width: fadeAnim,
          backgroundColor: 'rgba(255, 255, 255, 0.91)',
          position: 'absolute',
          bottom: 15,
          right: 10,
          borderRadius: responsiveScreenWidth(7.5),
          paddingLeft: 4,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{
            alignItems: 'center',
            width: responsiveScreenWidth(86.6),
          }}
        >
          {purchaseList &&
            purchaseList.map((content) => (
              <MiniMenu
                key={content._id}
                value={content}
                isVisible={content.count}
              >
                <Revoke onPress={() => reduceCount(content._id)}>
                  <Icon name="x" size={10} color="white" />
                </Revoke>
                <CountContainer>
                  <ListNum>{content.count}</ListNum>
                </CountContainer>
                <CustomText size={9} font="Regular" color="#877160">
                  {content.subname}
                </CustomText>
                <CustomText size={11} font="Regular" color="#000000">
                  {content.name}
                </CustomText>
              </MiniMenu>
            ))}
        </ScrollView>
      </Animated.View>
      <BasketButton
        value={click}
        onPress={() => {
          setClick(!click);
          !click ? setVisible() : setInvisible();
        }}
      >
        <ListNumContainer isVisible={click}>
          <ListNum>{totalNum}</ListNum>
        </ListNumContainer>
        {click ? (
          <Icon name="x" size={30} color="#877160" />
        ) : (
          <BasketWhiteSvg />
        )}
      </BasketButton>
    </>
  );
};

export default Toggle;
