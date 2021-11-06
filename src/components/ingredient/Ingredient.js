import React from 'react';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { CustomText } from '../CustomText';
import { IngredientRowView, RowView } from './IngredientStyle';

const Ingredient = ({ mainIngre }) => {
  const ingredients = Object.keys(mainIngre);
  return (
    <RowView>
      {ingredients.map((item) => (
        <IngredientRowView key={item.key}>
          <CustomText
            size={responsiveScreenFontSize(1.97)}
            font="Bold"
            color="#000000"
          >
            {item}
            {'  '}
          </CustomText>
          <CustomText
            size={responsiveScreenFontSize(1.97)}
            font="Regular"
            color="#000000"
          >
            {mainIngre[item]}
          </CustomText>
        </IngredientRowView>
      ))}
    </RowView>
  );
};

const SubIngredient = ({ subIngre }) => {
  const ingredients = Object.keys(subIngre);
  return (
    <RowView>
      {ingredients.map((item) => (
        <IngredientRowView key={item.key}>
          <CustomText
            size={responsiveScreenFontSize(1.97)}
            font="Bold"
            color="#000000"
          >
            {item}
            {'  '}
          </CustomText>
        </IngredientRowView>
      ))}
    </RowView>
  );
};
export { Ingredient, SubIngredient };
