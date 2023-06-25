import type { Meta, StoryObj } from '@storybook/react';
import { ThemeType } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(ThemeType.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(ThemeType.DARK)],
};

export const RedDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
