# Architecture

## Frontend

This project contain a starting point to develop a react frontend applications.

### Stacks

- React Router v7

Provide ssr capabilities and in a light weight library. Api are expected to run on another(s) Server(s)

- ShadCN

Provide generic components to be use in the application.

The list of components can be [found here](https://ui.shadcn.com/docs/components)

To add a new component to the project (e.g. with Card):

> npx shadcn@latest add card


- Tailwindcss

Tailwind enables to explore and build faster. It also generate optimized minified css.

- TypeScript

Make everything more reliable.

### Structure

[/app](./app) contains the application code

[/app/components](./app/components) contains all the reusable components

[/app/components/ui](./app/components/ui) contains shadcn generate components

[/app/theme](./app/theme) contains default and custom themes for tailwind

[/app/routes](./app/routes) contains the page structure of the application

[/stories](./stories) contains all storybook

[/docs](./docs) contains documentation


