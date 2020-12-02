import React from 'react';

import Typography from '~/components/Typography';

export default function Title({text, textBold}) {
  return (
    <Typography h1 light>
      {text}{' '}
      <Typography h1 bold>
        {textBold}
      </Typography>
    </Typography>
  );
}
