import * as React from 'react';

import Box from './index';

import { mount } from '../../setupTests';

describe('Basic test', () => {
  it('Can mount box', () => {
    const wrapper = mount(<Box message="Hello" />);
    expect(wrapper).toBeDefined();
  });
});
