import React from 'react';
import {StatusBar} from 'react-native';

import * as theme from '~/styles/theme';

export default function Index({
  color = theme.colors.white,
  barStyle = 'dark-content',
}) {
  return <StatusBar backgroundColor={color} barStyle={barStyle} />;
}
