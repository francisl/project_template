import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../app/components/ui/card';
import { Button } from '../app/components/ui/button';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This will create a new project in your workspace with all the necessary files and configurations.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Featured Project</CardTitle>
        <CardDescription>Latest updates and news</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
        <p className="text-sm text-muted-foreground">
          This is a featured project with an image placeholder and detailed description.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Total Users</span>
          <span className="font-medium">1,234</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Active Sessions</span>
          <span className="font-medium">567</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Revenue</span>
          <span className="font-medium">$12,345</span>
        </div>
      </CardContent>
    </Card>
  ),
};
 