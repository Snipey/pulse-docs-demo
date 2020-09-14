---
id: setup-with-vue
title: Setup With Vue
---

# Vue Setup

:::caution NOT USABLE YET
Vue was a large part of previous versions, so we're eager to add Vue support for the many people in the Pulse community that use Vue. We're still testing the best way to implement this below is the current plan, though this syntax is subject to change.
:::

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="yarn"
  values={[
    {label: 'NPM', value: 'npm'},
    {label: 'Yarn', value: 'yarn'},
  ]}>
  <TabItem value="npm">

    npm i --save @pulsejs/core @pulsejs/vue

  </TabItem>
  <TabItem value="yarn">

    yarn add @pulsejs/core @pulsejs/vue
    
  </TabItem>
</Tabs>

## Initialization

```ts
import Pulse from '@pulsejs/vue';

export const App = new Pulse();
```

## Example
```ts
import Vue from 'vue';
import Pulse from '@pulsejs/vue';

export const App = new Pulse();

const core = App.Core({
  MY_STATE: App.State(true)
});

export default new Vue({
  el: '#vue',
  data: {
    ...this.mapCore(core => ({
      localName: core.MY_STATE
    }))
  }
});
```