import type { Meta, StoryObj } from '@storybook/react';
import { Tiptap } from './tiptap';

const meta = {
  title: 'Ui/Tiptap',
  component: Tiptap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Tiptap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { keyPath: 'asd' } };
