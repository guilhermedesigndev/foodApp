import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${theme.colors.white};
`;

export const Container = styled.ScrollView``;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonBack = styled.TouchableOpacity`
  padding: 24px 24px 0px 24px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  padding: 24px 24px 0px 24px;
`;

export const ContainerProductDetail = styled.View`
  margin: ${Normalize.verticalScale(10)}px 24px 24px 24px;
`;

export const ContainerProduct = styled.View`
  align-items: center;
  margin-top: ${Normalize.verticalScale(50)}px;
`;

export const ImageProduct = styled.Image`
  width: 90%;
  height: 200px;
`;

export const ContainerInfoProduct = styled.View`
  margin-top: ${Normalize.verticalScale(40)}px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerItemInfo = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerDescriptionProduct = styled.View`
  margin-top: ${Normalize.verticalScale(30)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTextQtdProduct = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const ContainerTextDescriptionProduct = styled.View`
  flex: 7;
`;

export const ContainerAddQtdProduct = styled.View`
  flex: 3;
`;

export const ButtonQtd = styled.TouchableOpacity`
  position: relative;
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
  background: ${theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const ContainerAddToCart = styled.View`
  margin-top: ${Normalize.verticalScale(30)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonAddToCart = styled.View`
  flex: 7;
  height: 60px;
  background: ${theme.colors.primary};
  border-radius: 20px;
`;

export const ContainerText = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerValueCart = styled.View`
  flex: 3;
  align-items: flex-end;
`;
