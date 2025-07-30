import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../app/components/ui/input';
import { Label } from '../app/components/ui/label';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Pre-filled value',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" placeholder="john@example.com" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="tel" id="phone" placeholder="+1 (555) 123-4567" />
      </div>
    </div>
  ),
}; 