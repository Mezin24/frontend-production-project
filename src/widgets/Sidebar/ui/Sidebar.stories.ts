import type { Meta, StoryObj } from '@storybook/react';
import { ThemeType } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
