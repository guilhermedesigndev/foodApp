import React from 'react';
import {BoxShadow} from 'react-native-shadow';

import {
  Wrapper,
  Container,
  ContainerHeader,
  ButtonBack,
  ButtonFavorite,
  ContainerProductDetail,
  ContainerProduct,
  ImageProduct,
  ContainerInfoProduct,
  ContainerItemInfo,
  ContainerDescriptionProduct,
  ContainerAddQtdProduct,
  ContainerTextQtdProduct,
  ContainerTextDescriptionProduct,
  ButtonQtd,
  ContainerAddToCart,
  ButtonAddToCart,
  ContainerText,
  ContainerValueCart,
} from './styles';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';
import Title from '~/components/Title';

import * as theme from '~/styles/theme';

const shadowOpt = {
  width: 40,
  height: 60,
  color: '#979797',
  border: 30,
  radius: 20,
  opacity: 0.1,
  x: 10,
  y: 20,
};

export default function Detail({navigation}) {
  return (
    <Wrapper>
      <Container>
        <ContainerHeader>
          <ButtonBack onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-outline"
              color={theme.colors.black}
              height={32}
              width={32}
            />
          </ButtonBack>

          <ButtonFavorite>
            <Icon
              name="heart-outline"
              color={theme.colors.black}
              height={32}
              width={32}
            />
          </ButtonFavorite>
        </ContainerHeader>

        <ContainerProductDetail>
          <Title text="Meat" textBold="Mania" />

          <ContainerProduct>
            <ImageProduct
              source={{
                uri:
                  'https://hamburguerartesanal.site/images/header-iphone.png',
              }}
            />

            <ContainerInfoProduct>
              <ContainerItemInfo>
                <Typography h2>523 kkal</Typography>

                <Typography orange light>
                  Energy
                </Typography>
              </ContainerItemInfo>

              <ContainerItemInfo>
                <Typography h2>800 gr.</Typography>

                <Typography orange light>
                  Weight
                </Typography>
              </ContainerItemInfo>

              <ContainerItemInfo>
                <Typography h2>80 min</Typography>

                <Typography orange light>
                  Delivery
                </Typography>
              </ContainerItemInfo>
            </ContainerInfoProduct>

            <ContainerDescriptionProduct>
              <ContainerAddQtdProduct>
                <BoxShadow setting={shadowOpt}>
                  <ButtonQtd>
                    <Icon name="plus-outline" color={theme.colors.grayLight} />
                  </ButtonQtd>
                </BoxShadow>

                <ContainerTextQtdProduct>
                  <Typography h1 bold>
                    1
                  </Typography>
                </ContainerTextQtdProduct>

                <BoxShadow setting={shadowOpt}>
                  <ButtonQtd>
                    <Icon name="minus-outline" color={theme.colors.grayLight} />
                  </ButtonQtd>
                </BoxShadow>
              </ContainerAddQtdProduct>

              <ContainerTextDescriptionProduct>
                <Typography light gray h2>
                  Meat lovers, get ready to meet your match! Loaded with beef,
                  beef sausages, ground beef.
                </Typography>
              </ContainerTextDescriptionProduct>
            </ContainerDescriptionProduct>

            <ContainerAddToCart>
              <ButtonAddToCart>
                <ContainerText>
                  <Icon name="plus-outline" color={theme.colors.white} />

                  <Typography white h2>
                    Add to cart
                  </Typography>
                </ContainerText>
              </ButtonAddToCart>

              <ContainerValueCart>
                <Typography h1 orange>
                  $14.6
                </Typography>
              </ContainerValueCart>
            </ContainerAddToCart>
            {/*  */}
          </ContainerProduct>
        </ContainerProductDetail>
      </Container>
    </Wrapper>
  );
}
