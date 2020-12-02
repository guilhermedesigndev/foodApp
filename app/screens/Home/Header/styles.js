import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export const ContainerHeader = styled.View`
  margin: ${Normalize.verticalScale(50)}px 24px 0px 24px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: ${Normalize.verticalScale(50)}px;
  background: ${theme.colors.cardBackground};
  border-radius: 40px;
  padding: 10px;
  margin-top: ${Normalize.verticalScale(20)}px;
  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  margin-left: 6px;
  width: 90%;
  font-family: ${theme.fonts.light};
  color: ${theme.colors.black};
`;

export const ContainerCombo = styled.View`
  width: 100%;
  height: ${Normalize.verticalScale(100)}px;
  border-radius: 20px;
  background: ${theme.colors.secondary};
  margin-top: ${Normalize.verticalScale(30)}px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerInfo = styled.View`
  flex: 6;
  justify-content: center;
`;

export const ContainerImageCombo = styled.View`
  flex: 4;
`;

export const ImageCombo = styled.Image`
  width: 130px;
  height: 130px;
  position: absolute;
  top: -50px;
`;
