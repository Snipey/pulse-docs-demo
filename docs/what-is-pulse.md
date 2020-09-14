---
id: what-is-pulse
title: What Is Pulse?
sidebar_label: What Is Pulse?
slug: /
---
## Pulse Framework `3.0`

Created by [@jamiepine](https://twitter.com/jamiepine) | Sponsored and maintained by the [Notify Team](https://notify.me)

> _Pulse is a global state and logic framework for reactive Typescript & Javascript applications. Supporting frameworks like VueJS, React and React Native._

<p align="center">
  <a href="https://patreon.com/jamiepine"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Donate on patreon"/></a>
  <a href="https://twitter.com/jamiepine"><img src="https://img.shields.io/twitter/follow/jamiepine.svg?label=Jamie's Twitter" alt="Follow on twitter"/></a>
  <a href="https://twitter.com/pulseframework"><img src="https://img.shields.io/twitter/follow/pulseframework.svg?label=Pulse+Twitter" alt="Follow Pulse on twitter"/></a>
  <a href="https://discord.gg/RjG8ShB"><img src="https://discordapp.com/api/guilds/658189217746255881/embed.png" alt="Join Discord"/></a>
  <a href="https://www.npmjs.com/org/pulsejs"><img src="https://img.shields.io/npm/v/@pulsejs/core.svg" alt="NPM Package Version"/></a>
  <a href="https://www.npmjs.com/org/pulsejs"><img src="https://img.shields.io/npm/dm/@pulsejs/core.svg" alt="NPM Monthly Downloads"/></a>
  <a href="https://www.npmjs.com/org/pulsejs"><img src="https://img.shields.io/npm/dw/@pulsejs/core.svg" alt="NPM Weekly Downloads"/></a>
  <a href="https://www.npmjs.com/org/pulsejs"><img src="https://img.shields.io/npm/dt/@pulsejs/core.svg" alt="NPM Total Downloads"/></a>
  <a href="https://www.npmjs.com/org/pulsejs"><img src="https://img.shields.io/bundlephobia/min/@pulsejs/core" alt="NPM Bundle MIN Size"/></a>
  <a href="https://github.com/@pulsejs/core"><img src="https://img.shields.io/github/license/pulse-framework/pulse.svg" alt="GitHub License"/></a>
  <a href="https://github.com/@pulsejs/core"><img src="https://img.shields.io/github/languages/code-size/pulse-framework/pulse.svg" alt="GitHub Code Size"/></a>
  <a href="https://github.com/@pulsejs/core"><img src="https://img.shields.io/github/repo-size/pulse-framework/pulse.svg" alt="GitHub Repo Size"/></a>
</p>

```ts
const App = new Pulse();

const Hello = App.State('the sound of music');
```

Lightweight, modular and powerful. An alternative to `Redux`/`VueX`/`MobX` and request libraries such as `Axios`/`Request.js`. Use Pulse to create a **_core_** state & logic library for your application; plug and play directly into any UI Framework.

## Why Pulse?

Pulse provides a clean-cut toolset to build a Javascript application quickly and efficiently. It encourages developers to construct a core library that can be dropped into any UI framework. Your `core` is the brain of your application, it will handle everything from state management, API requests to all logic and calculations. Pulse will supply pre-computed data to your UI components, in the framework of your choice with complete reactivity.

### Typescript

Pulse is written in Typescript and is designed to support it heavily. Everything is type safe out of the box and encourages you to write clean typed code, however Pulse can still be used without Typescript.

## Quick Walk-Through

### **State** 

#### `App.State()`

A handy container to store, manipulate and relate data.

```ts
const MY_STATE = App.State(true);
```

...with a range of chainable methods.

```js
MY_STATE.toggle().persist().set().type().watch().reset().undo(); // etc...
```

### Computed State 

#### `App.Computed()`

A function in which the return value is cached inside an extended State instance. Will magically recompute when it's dependencies change. Can track dependencies automatically or manually.

```ts
const MY_COMPUTED = App.Computed(() => !!MY_STATE.value);
```

### Collections 

#### `App.Collection()`

A DB/ORM-like class for front-end data collection.

Collections are designed for arrays of data following the same structure, usually returned from an API. They have handy features to work with that data and act as a single source of truth.

```ts
const AccountCollection = App.Collection()();

AccountCollection.collect(data);
```

### Groups 

#### `Collection.Group()`

Groups handy to provide arrays of collection data and can be used independently in your components. When the index of a group is modified, it will "rebuild" the `output` with actual collection data.

```ts
const AccountCollection = App.Collection()(collection => ({
  groups: {
    AUTHED: collection.Group();
  }
}));

AccountCollection.groups.AUTHED.output; // cached data
```

### Promise based HTTP request API 

#### `App.API()`

```ts
const API = App.API({
  baseURL: 'https://my.api.me',
  timeout: 10000,
  options: { credentials: 'include' }
});
```

### Persisted Storage API 

#### `App.Storage()`

```ts
// localStorage is automatic, so here's a custom example
App.Storage({
  async: true,
  get: AsyncStorage.getItem,
  set: AsyncStorage.setItem,
  remove: AsyncStorage.removeItem
});
```

### **Turn back the clock** 

#### `State.undo()`

```ts
const MY_STATE = App.State('hello');

MY_STATE.set('bye');

MY_STATE.undo();

MY_STATE.value; // Expected Output: "hello"
```

### **Events** 

#### `App.Event()`

```ts
const ALERT = App.Event();

ALERT.emit({ message: 'notify events best events!' });
const cleanup = ALERT.on(renderAlert);

useEvent(ALERT, renderAlert); // React Hook with auto cleanup!
```

### **[WIP]** CRON Jobs 

#### `App.Job()`

```ts
App.Job(60000, () => {
  // do something
}).start();
```

### Lifecycle hooks

#### `State.watch()` / `App.onReady()` / `App.nextPulse()`

```ts
MY_STATE.watch('name', () => {
  // do something when MY_STATE changes
});

App.nextPulse(() => {
  MY_STATE.removeWatcher('name');
});
```

#### Task queuing for race condition prevention

#### [WIP] Error logging & snapshot bug reporting

#### Lightweight (only 100KB) with 0 dependencies

#### Well documented (I'm getting there...)
