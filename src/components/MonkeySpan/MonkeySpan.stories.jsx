import React from "react";

import MonkeySpan from "./MonkeySpan";

// This is a format required for the addons to work
const Template = (args) => <MonkeySpan {...args} />;

const MonkeyFaceEmoji = Template.bind({});

MonkeyFaceEmoji.args = {
  ariaLabel: "A Monkey Face Emoji",
  children: "🐵",
};

const CatFaceEmoji = Template.bind({});

CatFaceEmoji.args = {
  ariaLabel: "A Cat Face Emoji",
  children: "🐱",
};

const DogEmoji = Template.bind({});

DogEmoji.args = {
  ariaLabel: "A Dog Face Emoji",
  children: "🐶",
};

export { MonkeyFaceEmoji, CatFaceEmoji, DogEmoji };

export default {
  title: "Components/MonkeySpan",
  description: "A cool component",
  component: MonkeySpan,
  argTypes: {
    children: { control: "text" },
  },
};
