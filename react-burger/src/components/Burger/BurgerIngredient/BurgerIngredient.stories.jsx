import React from 'react';
import BurgerIngredient from './BurgerIngredient';

export default {
  title: 'Burger Builder/Burger/Burger Ingredient',
  component: BurgerIngredient,
  decorators: [
    (Story) => (
      <div className="w-100 h-100 d-flex justify-content-center">
        <div style={{ height: '300px', width: '350px' }} className="d-flex align-items-center">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    type: { control: { type: 'select', options: ['bread-top', 'salad', 'bacon', 'cheese', 'bread-bottom'] } },
  },
};
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <BurgerIngredient {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'bread-top',
};
