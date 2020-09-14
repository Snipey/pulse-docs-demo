---
id: concepts
title: Pulse Concepts
---

## Structure

Pulse was designed to take all business logic out of components, meaning your React/Vue/Angular components are essentially puppets for Pulse to orchestrate. The benefit of keeping logic separate to visual components is versatility, upgradeability, and cleanliness. An example would be with [Notify's](https://notify.me) codebase, the majority of the business logic is in a repository called `notify-core` and our components are purely React code with hooks into the core. This allows us the freedom to build different components for different platforms that all behave the same way.

## Reactivity

Reactive data is state that will react to mutations in order to cause component re-renders. Components can subscribe to Pulse state and will be updated when the state changes.

## Thesaurus

:::tip How we refer to our own classes

In these docs we will refer to our classes with a capital first letter. When you see "state" we're referring to the programming concept `state`, but when you see [State](../main/state.md) we're referring to our [State](../main/state.md) class.
:::

- **Pulse Instance**: The result of initializing Pulse, a reference to your Pulse application.
- **The Core**: Your library of State, Collections and Controllers in a single object.
- **Reactivity**: The concept of state mutations causing component re-renders automatically.
- **Declaration**: Refers to logic as it is declared in the code, the opposite of this would be runtime.
- **Runtime**: When Pulse is fully initialized and the core is ready, runtime begins. Runtime handles queuing state changes.
- **Primary Key**: Refers to the identifier used to index data items within a Collection, a `string` or `number`. Also known as __"pk"__ or __"id"__.
