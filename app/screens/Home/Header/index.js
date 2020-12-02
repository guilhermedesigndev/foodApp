import React from 'react';

import {
  ContainerHeader,
  ContainerInput,
  InputSearch,
  ContainerCombo,
  ContainerInfo,
  ContainerImageCombo,
  ImageCombo,
} from './styles';

import * as theme from '~/styles/theme';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';
import Title from '~/components/Title';

export default function Header() {
  return (
    <ContainerHeader>
      <Title text="Hi" textBold="Guilherme!" />

      <ContainerInput>
        <Icon name="search-outline" color={theme.colors.gray} />
        <InputSearch placeholder="Find what you want..." />
      </ContainerInput>

      <ContainerCombo>
        <ContainerInfo>
          <Typography white h2 bold>
            Free Combo
          </Typography>

          <Typography white h3 light marginTop>
            Burguer + Coca-Cola for new users
          </Typography>
        </ContainerInfo>

        <ContainerImageCombo>
          <ImageCombo
            source={{
              uri:
                'https://hotdogbrasil.com.br/wp-content/uploads/2019/08/coalho-1.png',
            }}
          />
        </ContainerImageCombo>
      </ContainerCombo>
    </ContainerHeader>
  );
}
