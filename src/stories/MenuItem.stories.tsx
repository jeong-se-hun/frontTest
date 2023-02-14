import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from '../components/header/MenuItem';
import { Menu } from '../components/header/MenuList';

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = args => {
  return (
    <Menu>
      <MenuItem {...args}>{args.children + '1'}</MenuItem>
      <MenuItem {...args}>{args.children + '2'}</MenuItem>
      <MenuItem {...args}>{args.children + '3'}</MenuItem>
    </Menu>
  );
};

export const main_home = Template.bind({});
export const sub_home = Template.bind({});

main_home.args = {
  type: 'main',
  children: 'home',
};
sub_home.args = {
  type: 'sub',
  children: 'home',
};
