import type { Story } from '@storybook/react';
import React from 'react';

import MonkeySpan, { MonkeySpanProps } from './MonkeySpan';

// This is a format required for the addons to work
const Template: Story<MonkeySpanProps> = (args) => <MonkeySpan {...args} />;

const MonkeyFaceEmoji = Template.bind({});

MonkeyFaceEmoji.args = {
  label: 'A Monkey Face Emoji',
  children: '🐵',
};

const CatFaceEmoji = Template.bind({});

CatFaceEmoji.args = {
  children: '🐱',
  label: 'A Cat Face Emoji',
  scale: 4,
  spinmoji: 'slow-reverse',
  passthrough: {
    onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) =>
      // eslint-disable-next-line no-console
      e.key === 'Enter' && console.log(e.currentTarget),
    onClick: (e: React.MouseEvent<HTMLSpanElement>) =>
      // eslint-disable-next-line no-console
      console.log(e.currentTarget),
    role: 'button',
    tabIndex: 0,
  },
};

const DogFaceEmoji = Template.bind({});

DogFaceEmoji.args = {
  children: '🐶',
  scale: 4.5,
  spinmoji: 'fast',
  label: 'A Dog Face Emoji',
};

export { MonkeyFaceEmoji, CatFaceEmoji, DogFaceEmoji };

export default {
  title: 'Components/MonkeySpan',
  description: 'A cool component',
  component: MonkeySpan,
  argTypes: {
    children: { control: 'text' },
  },
};
