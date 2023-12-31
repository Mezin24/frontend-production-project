import type { Meta, StoryObj } from '@storybook/react';
import { ThemeType } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
