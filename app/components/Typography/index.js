import React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export default function Typography({
  children,
  marginLeft,
  marginTop,
  bold,
  medium,
  light,
  gray,
  white,
  orange,
  h1,
  h2,
  h3,
  center,
  base,
}) {
  const textStyles = [
    styles.text,
    marginLeft && styles.marginLeft,
    marginTop && styles.marginTop,
    bold && styles.bold,
    medium && styles.medium,
    light && styles.light,
    gray && styles.gray,
    white && styles.white,
    orange && styles.orange,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    center && styles.center,
    base && styles.base,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.h3,
    color: theme.colors.black,
  },
  bold: {
    fontFamily: theme.fonts.bold,
  },
  medium: {
    fontFamily: theme.fonts.medium,
  },
  light: {
    fontFamily: theme.fonts.light,
  },
  gray: {
    color: theme.colors.gray,
  },
  white: {
    color: theme.colors.white,
  },
  orange: {
    color: theme.colors.primary,
  },
  h1: {
    fontSize: theme.sizes.h1,
  },
  h2: {
    fontSize: theme.sizes.h2,
  },
  h3: {
    fontSize: theme.sizes.h3,
  },
  base: {
    fontSize: theme.sizes.base,
  },
  center: {
    textAlign: 'center',
  },
  marginLeft: {
    marginLeft: 24,
  },
  marginTop: {
    marginTop: Normalize.verticalScale(5),
  },
});
