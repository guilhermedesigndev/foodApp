import Normalize from '~/helpers/escale';

const colors = {
  primary: '#E37537',
  secondary: '#4EAA52',
  white: '#FFFFFF',
  gray: '#808080',
  black: '#000000',
  grayLight: '#AFAFAF',
  cardBackground: '#FAF8F8',
};

const sizes = {
  h1: Normalize.moderateScale(24),
  h2: Normalize.moderateScale(18),
  h3: Normalize.moderateScale(14),
  base: Normalize.moderateScale(12),
};

const fonts = {
  bold: 'Netflix Sans Bold',
  medium: 'Netflix Sans Medium',
  light: 'Netflix Sans Light',
};

export {colors, sizes, fonts};
