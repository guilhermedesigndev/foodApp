import React from 'react';

import {CategoryList, ContainerCategory, ImageCategory} from './styles';

import Typography from '~/components/Typography';

import BurguerImage from '~/assets/images/burguer.png';
import PizzaImage from '~/assets/images/pizza.png';
import DrinkImage from '~/assets/images/drink.png';
import SushiImage from '~/assets/images/sushi.png';

const categories = [
  {id: '01', label: 'Burgers', image: BurguerImage},
  {id: '02', label: 'Pizza', image: PizzaImage},
  {id: '03', label: 'Drinks', image: DrinkImage},
  {id: '04', label: 'Sushi', image: SushiImage},
];

export default function Categories() {
  function renderItemsCategories({item}) {
    return (
      <ContainerCategory>
        <ImageCategory source={item.image} resizeMode="contain" />
        <Typography light h3>
          {item.label}
        </Typography>
      </ContainerCategory>
    );
  }

  return (
    <CategoryList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItemsCategories}
      contentContainerStyle={{paddingLeft: 24, paddingRight: 14}}
    />
  );
}
