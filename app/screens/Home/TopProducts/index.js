import React from 'react';

import {
  ContainerTopProducts,
  TopProductsList,
  ActionsListEmpty,
  CardTopProducts,
  ImageProduct,
  ContainerInfoProduct,
  ContainerDescriptionProduct,
  ButtonAddProduct,
} from './styles';

import * as theme from '~/styles/theme';

import createRows from '~/helpers/createRows';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';

const NUM_COLUMNS = 2;

const dataTopProducts = [
  {
    id: '01',
    name: 'Berry Juice',
    value: '$7.5',
    image:
      'https://www.frutassossai.com.br/wp-content/uploads/2020/10/copo-suco-300x650.png',
  },
  {
    id: '02',
    name: 'Origin Taste',
    value: '$12.6',
    image:
      'https://i.pinimg.com/originals/7c/77/d2/7c77d2dda0f5992aaf463589b32209a6.png',
  },
  {
    id: '03',
    name: 'Origin Taste',
    value: '$12.6',
    image:
      'https://lh3.googleusercontent.com/proxy/1XPDvuRs8nXHoKOWppoto-qD3zoytCgWVtpYEKBsMkNkTyTBZCYaXwPY49fV0MjS9b4M_rdynADOlR0ZP7P3V3It5O3p_si6ZlUCP3rKE-5yyb8fovad4scR06uU9yR-xXBohieGX9F5eIa8',
  },
];

export default function TopProducts({navigation}) {
  function renderItemsProducts({item}) {
    if (item.empty) {
      return <ActionsListEmpty />;
    }

    return (
      <CardTopProducts onPress={() => navigation.navigate('Detail')}>
        <ImageProduct source={{uri: item.image}} resizeMode="contain" />

        <ContainerInfoProduct>
          <ContainerDescriptionProduct>
            <Typography base>{item.name}</Typography>
            <Typography base orange>
              {item.value}
            </Typography>
          </ContainerDescriptionProduct>

          <ButtonAddProduct>
            <Icon name="plus-outline" color={theme.colors.white} />
          </ButtonAddProduct>
        </ContainerInfoProduct>
      </CardTopProducts>
    );
  }

  return (
    <ContainerTopProducts>
      <Typography medium h2 marginLeft>
        Top Products
      </Typography>

      <TopProductsList
        data={createRows(dataTopProducts, NUM_COLUMNS)}
        keyExtractor={(item) => item.id}
        renderItem={renderItemsProducts}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={{paddingLeft: 18, paddingRight: 18}}
      />
    </ContainerTopProducts>
  );
}
