import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Test/Tailwind',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TailwindTest: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Tailwind CSS Test</h1>
      <p className="text-gray-700">This text should be styled with Tailwind CSS.</p>
      <div className="bg-red-500 text-white p-4 rounded-lg">
        This should have a red background with white text.
      </div>
      <div className="bg-green-500 text-white p-4 rounded-lg">
        This should have a green background with white text.
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        This should have a blue background with white text.
      </div>
    </div>
  ),
}; 