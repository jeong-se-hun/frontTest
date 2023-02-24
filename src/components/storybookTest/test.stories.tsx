import React from "react";

import { Meta, Story } from "@storybook/react";
import Test, { TitleProps } from "./test";

export default {
  title: "Components/Test",
  component: Test,
} as Meta;

const Template: Story<TitleProps> = (args) => <Test {...args} />;

export const Basic = Template.bind({});
