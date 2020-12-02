import React from 'react';

import {Wrapper, Container} from './styles';

import Header from './Header';
import Categories from './Categories';
import TopProducts from './TopProducts';

export default function Home({navigation}) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Categories />
        <TopProducts navigation={navigation} />
      </Container>
    </Wrapper>
  );
}
