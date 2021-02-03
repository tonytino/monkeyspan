import React from 'react';

import MonkeySpan from './MonkeySpan';

// This is a format required for the addons to work
const Template = (args) => <MonkeySpan {...args} />;

const MonkeyFaceEmoji = Template.bind({});
const style = { fontSize: '5rem' };

MonkeyFaceEmoji.args = {
  label: 'A Monkey Face Emoji',
  children: '🐵',
  style,
};

const CatFaceEmoji = Template.bind({});

CatFaceEmoji.args = {
  label: 'A Cat Face Emoji',
  children: '🐱',
  style,
};

const DogEmoji = Template.bind({});

DogEmoji.args = {
  label: 'A Dog Face Emoji',
  children: '🐶',
  style,
};

export { MonkeyFaceEmoji, CatFaceEmoji, DogEmoji };

export default {
  title: 'Components/MonkeySpan',
  description: 'A cool component',
  component: MonkeySpan,
  argTypes: {
    children: { control: 'text' },
  },
};
