import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Box from './index';

const stories = storiesOf('Components', module);

stories.add(
  'Box',
  withInfo({ inline: true })(() => {
    return <Box message="hi" />;
  })
);
