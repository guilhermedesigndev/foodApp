import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

const screenWidth = Dimensions.get('screen').width;

export const ContainerTopProducts = styled.View`
  margin-top: ${Normalize.verticalScale(30)}px;
`;

export const TopProductsList = styled.FlatList`
  margin: ${Normalize.verticalScale(10)}px 0px ${Normalize.verticalScale(10)}px
    0px;
`;

export const ActionsListEmpty = styled.View`
  flex: 1;
  padding: 5px;
  margin: 5px;
`;

export const CardTopProducts = styled.TouchableOpacity`
  width: ${screenWidth / 2 - 32}px;
  border-radius: 20px;
  background: ${theme.colors.cardBackground};
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 6px;
`;

export const ImageProduct = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ContainerInfoProduct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContainerDescriptionProduct = styled.View`
  flex: 1;
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${40 / 2}px;
  background: ${theme.colors.secondary};
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`;
