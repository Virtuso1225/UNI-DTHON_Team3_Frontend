import React from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { CustomText } from '../CustomText';
import { IngredientRowView, RowView } from './IngredientStyle';

const Ingredient = () => {
  return (
    <RowView>
      <IngredientRowView>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Bold"
          color="#000000"
        >
          대파
        </CustomText>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Regular"
          color="#000000"
        >
          1/2대
        </CustomText>
      </IngredientRowView>
      <IngredientRowView>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Bold"
          color="#000000"
        >
          김치{' '}
        </CustomText>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Regular"
          color="#000000"
        >
          1컵
        </CustomText>
      </IngredientRowView>
      <IngredientRowView>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Bold"
          color="#000000"
        >
          김치{' '}
        </CustomText>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Regular"
          color="#000000"
        >
          1컵
        </CustomText>
      </IngredientRowView>
      <IngredientRowView>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Bold"
          color="#000000"
        >
          김치{' '}
        </CustomText>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Regular"
          color="#000000"
        >
          1컵
        </CustomText>
      </IngredientRowView>
    </RowView>
  );
};

const SubIngredient = () => {
  return (
    <RowView>
      <IngredientRowView>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Bold"
          color="#000000"
        >
          식용유
        </CustomText>
      </IngredientRowView>
      <IngredientRowView>
        <CustomText
          size={responsiveScreenFontSize(1.97)}
          font="Bold"
          color="#000000"
        >
          설탕
        </CustomText>
      </IngredientRowView>
    </RowView>
  );
};
export { Ingredient, SubIngredient };
