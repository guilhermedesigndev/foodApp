import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export const CategoryList = styled.FlatList`
  margin-top: ${Normalize.verticalScale(20)}px;
`;

export const ContainerCategory = styled.TouchableOpacity`
  width: ${Normalize.horizontalScale(110)}px;
  height: ${Normalize.verticalScale(90)}px;
  background: ${theme.colors.cardBackground};
  border-radius: 20px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageCategory = styled.Image`
  margin-bottom: 20px;
  width: ${Normalize.horizontalScale(32)}px;
  height: ${Normalize.verticalScale(32)}px;
`;
