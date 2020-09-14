---
title: Pulse Instance
---

## Introduction

Everything you write with Pulse will use the `App` instance. With this you can create [State](./state.md), [Computed State](./computed.md), [Collections](./collections.md), [APIs](./api.md) and more.

The Pulse Instance is unique to your application, you only need one. It should be exported top-level and imported into core files.

```ts
const App = new Pulse();
```

The Pulse Instance provides helpful function to your application, and the way you write your [Core](./core.md).

- Queueing [State](./state.md) changes and preventing race conditions.
- Providing global awareness to [Computed State](./computed.md) for automatic dependency tracking.
- Integrating with persistent storage.
- Initializing the [Core](./core.md) structure.
- Issuing squashed updates to subscribed components via the `Pulse Runtime`.

## Configuration Options

Pulse takes an optional configuration object as the only parameter

```ts
const App = new Pulse({
  framework: React,
  storage: {
    prefix: 'CoolApp'
  }
});
```

> Here's a Typescript interface for quick reference, however each property will be explained in more detail below.

```ts
interface PulseConfig {
  storage?: StorageConfig;
  computedDefault?: any;
  waitForMount?: boolean;
  framework?: any;
  logJobs?: boolean;
}
```

## Options Reference

### `storage`

This option is for state persistence with local storage or a custom storage API such as React Native's AsyncStorage

```ts
interface StorageConfig {
  get: () => any;
  set: (key: string) => any;
  remove: (key: string) => any;
  async?: boolean; // Is the storage asynchronous
  prefix?: string; // a custom prefix for local storage keys
}
```

### `computedDefault`

The value provided here will be the fallback used when the result of a computed function is `null` or `undefined`.

### `waitForMount`

### `computedDefault`

### `framework`

### `errors` [wip]

```ts
interface ErrorConfig {}
```

## Error Handling [WIP]

Pulse offers a global error handler best suited for use with [Actions](./actions.md) on a try/catch and automatically used by [App.Action()](./actions.md).

```ts
App.onError((error: ErrorObject) => {
  if (error.code === 401) core.accounts.logout();
});
```

Pulse will try to parse a caught error, and will always provide this object so you can safely process the error.

```ts
interface ErrorObject {
  code: number; // if the error was because of a request, this will be the request error code
  message: string;
  action: Function; // reference to action in which the error occurred
  raw: any; // The raw error
}
```

You can configure your [API](./api.md) instance to prepare response data for the error handler also. More about this on [API](./api.md);
