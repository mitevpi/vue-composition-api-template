<img src="https://cdn.auth0.com/blog/vuejs/vue-logo.png" alt="Vue.js" width="100"/>

# Vue 3.0 Composition API Starter Template

A Vue.js 3.0 full project starter template including best practices for code styling, testing, and building. Also incorporates the (soon to be released) [Composition API](https://vue-composition-api-rfc.netlify.com/).

## Usage

Fork, download, or clone this repository and use it as a starting point for your next Vue.js project.

## Examples

This repository features 3 components which function almost identically, but leverage the new Composition API in different ways.

1. [Counter.vue](src/components/Counter.vue) - This is the most basic way of building a component with the new Composition API. Our state is entirely managed in the component itself, and we don't use Vuex or other state management plugins.
2. [CounterVuex.vue](src/components/CounterVuex.vue) - This component performs the same function as the basic `Counter.vue`, except it uses a Vuex [store](src/store.js) for global state management. That means that even when leaving the page/route that hosts this component, the data is still persistent in the [store](src/store.js). Unlike the basic `Counter.vue`, the number in the counter will not be reset to 0 every time we load this component.
3. [CounterVuexHooks.vue](src/components/CounterVuexHooks.vue) - This component functions identically to the `CounterVuex.vue` component, but it modularizes the code a bit more with the use of the code in the [hooks](src/hooks) folder. This allows us to abstract and modularize our functions in such a way that they can be used in multiple components, without re-writing the functions on every component. It also cleans up and truncates the `<script>` code which lives inside of the Vue component itself.

## Added/Updated Configurations to Vue CLI Starter

1. [AirBnB Style Guide](https://github.com/airbnb/javascript)
2. [Prettier Style Guide](https://prettier.io/)
3. [Jest (Unit Testing)](https://jestjs.io/)
4. [ESLint (Style Enforcing)](https://eslint.org/)
5. [Composition API](https://vue-composition-api-rfc.netlify.com/)

## Commands

The following commands are used to develop the project:

1. `npm run build` - Build the package distribution bundle.
2. `npm run serve` - Start a development server with live-reloading on changes. (Used for previewing individual components.)
3. `npm run lint` - Lint code using ESLint and Vue, AirBnB, and Prettier configs.
4. `npm run test:unit` - Run unit tests for the individual components in the package.
