# TrustPilot React Widget Library

This library provides a set of customizable Trustpilot widgets for embedding on your website or application. It allows you to integrate Trustpilot's review display system, product ratings, and review collection functionality.

## Features

- **Provider Component**: To initialize Trustpilot with your business details and load the Trustpilot widget.

- **Various Widgets**: Different types of Trustpilot widgets for displaying reviews, product ratings, review collection, and more.

- **Seamless Integration**: Simple to use with React components and supports custom configurations.

## How To Use

### 1. Install the library

```bash
npm install @mr-fougere/react-trustpilot
```

### 2. Initialize the provider

The `TrustPilotProvider` component is a context provider that makes Trustpilot configuration available to all its child components. It manages the loading state of the Trustpilot script, injects it, and provides the necessary data (business unit ID, widget URL, locale, and a function to load the widget).

#### Props

- `businessUnitId`: The Trustpilot business unit ID for your company.
- `websiteUrl`: The URL of the website with reviews

#### Example

```tsx
import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { TrustPilotProvider } from "react-trustpilot";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrustPilotProvider
      businessUnitId="YOUR_BUSINESSUNIT_ID"
      websiteUrl="YOUR_WEBSITE_URL">
      <App />
    </TrustPilotProvider>
  </StrictMode>
);
```

### 2. Call TrustBowWidget

The `TrustBoxWidget` is an object that contains various Trustpilot widgets, including essential widgets, testimonial widgets, review collector widgets, and product review widgets. Each widget can be rendered by passing the appropriate props to the component.

#### Props

- Most of the widget dont need props but for product reviews, `sku is mandatory

Example Widgets

```ts
import { TrustBoxWidget } from "react-trustpilot";

function App() {
  return (
    <>
      <TrustBoxWidget.Horizontal />
    </>
  );
}

export default App;
```

```ts
import { TrustBoxWidget } from "react-trustpilot";

function App() {
  return (
    <>
      <TrustBoxWidget.ProductMini sku="YOUR_SKU" />
    </>
  );
}

export default App;
```
