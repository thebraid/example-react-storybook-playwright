import type { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta = {
  title: 'Example/App',
  component: App,
  args: {
    initPotions: ['one', 'two']
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
