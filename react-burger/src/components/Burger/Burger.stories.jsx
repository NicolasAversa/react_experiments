import React from 'react';
import Burger from './Burger';

export default {
  title: 'Burger Builder/Burger',
  component: Burger,
  argTypes: {
    ingredients: {
      name: 'Ingredients',
      table: {
        type: {
          summary: 'Burger',
          detail: 'Burger detail',
        },
      },
      control: {
        type: 'object',
      },
    },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Burger {...args} />;

export const Default = Template.bind({});
Default.args = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
};
