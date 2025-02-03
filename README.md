# ⭐ Trustpilot React Widget Library

This library provides a set of customizable Trustpilot widgets for embedding on your website or application. It allows you to integrate Trustpilot's review display system, product ratings, and review collection functionality.

## ⚡ Features

- **Provider Component**: Initializes Trustpilot with your business details and loads the Trustpilot widget.
- **Various Widgets**: Different types of Trustpilot widgets for displaying reviews, product ratings, and review collection.
- **Seamless Integration**: Simple to use with React components and supports custom configurations.

---

## 📚 Installation

```bash
npm install @mr-fougere/react-trustpilot-widgets
```

---

## 🏁 Quickstart

### 🗃️ Initialize the Trustpilot Widget Provider

The `TrustpilotWidgetProvider` component is a context provider that makes Trustpilot Widget configuration available to all its child components. It manages the loading state of the Trustpilot widget script, injects it, and provides the necessary data (business unit ID, widget URL, locale, and a function to load the widget).

#### 🛠️ Props

- 🏢 **`businessUnitId`** _(required)_: The Trustpilot business unit ID (BUID). Find your BUID with this [tutorial](https://support.trustpilot.com/hc/en-us/articles/4404467354898-Create-a-custom-TrustBox-widget-using-Trustpilot-APIs#finding-a-buid-1).
- 🌐 **`websiteUrl`** _(required)_: The URL of your Trustpilot widget. It corresponds to the company domain in the [company settings](https://businessapp.b2b.trustpilot.com/company-settings/) without the `http`.
- 💬 **`locale`** _(optional)_: The language used in the widgets (defaults to the user's browser language).

⚠️ If `businessUnitId` and `websiteUrl` are not provided, the preview mode will be used, and your real reviews will not be displayed.

#### 🔹 Example

```tsx
import { TrustpilotWidgetProvider } from "@mr-fougere/react-trustpilot-widgets";
import { PropsWithChildren } from "react";

export const TrustpilotWidgetLayout = ({ children }: PropsWithChildren) => {
  return (
    <TrustpilotWidgetProvider
      businessUnitId="YOUR_BUSINESSUNIT_ID"
      websiteUrl="YOUR_WEBSITE_URL"
      locale="fr-FR">
      {children}
    </TrustpilotWidgetProvider>
  );
};
```

---

## 💭 Using the `TrustBoxWidget` Component

Once the provider is initialized, you can use any Trustpilot widget inside the application. TrustBox widgets only work within a `TrustpilotWidgetProvider`.

### 🎛️ General Props

- **`height`** and **`width`** _(optional)_: Define the widget size in `px` or `%`. You can use `min` or `max` for responsive sizing (default: 100% width and minimum height for the given widget).
- **`sku`** _(required for product reviews only)_: An array of strings corresponding to product SKUs. Use `PREVIEW` to render test reviews.
- **`locale`** _(optional)_: Overrides the language set in the provider.
- **`theme`** _(optional)_: Defines the theme (`light` by default).
- **`fontFamily`** _(optional)_: Sets the font (`Helvetica` by default).
- **`children`** _(optional)_: Defines the loading element (default: none).

---

## 📌 Example Widgets

### ➤ **Horizontal Widget (no props)**

```tsx
import { TrustBoxWidget } from "@mr-fougere/react-trustpilot-widgets";

function App() {
  return <TrustBoxWidget.Horizontal />;
}

export default App;
```

### ➤ **Product Mini Widget (only required props)**

```tsx
import { TrustBoxWidget } from "@mr-fougere/react-trustpilot-widgets";

function App() {
  return <TrustBoxWidget.ProductMini sku="SKU_EXAMPLE" />;
}

export default App;
```

### ➤ **Review Collector Widget (resized)**

```tsx
import { TrustBoxWidget } from "@mr-fougere/react-trustpilot-widgets";

function App() {
  return (
    <TrustBoxWidget.ReviewCollector height="max" width="200px">
      Loading...
    </TrustBoxWidget.ReviewCollector>
  );
}

export default App;
```

### ➤ **Filtered Testimonial List** (dark theme, minimum height and 50% width,German locale, Spanish reviews with 1, 2, or 3 stars)

⚠️ If you filter reviews by rating, inform the customer.

```tsx
import { TrustBoxWidget } from "@mr-fougere/react-trustpilot-widgets";

function App() {
  return (
    <TrustBoxWidget.DropDown
      locale="de-DE"
      theme="dark"
      height="min"
      width="50%"
      stars={[1, 2, 3]}
      reviewLanguages={["es"]}>
      Loading...
    </TrustBoxWidget.DropDown>
  );
}

export default App;
```

### ➤ **Multi-Source Product Reviews** (dark theme, blue stars, Oxygen font, French locale, 4 and 5-star reviews)

⚠️ If you filter reviews by rating, inform the customer.

```tsx
import { TrustBoxWidget } from "@mr-fougere/react-trustpilot-widgets";

function App() {
  return (
    <TrustBoxWidget.ProductReviewsMultiSource
      locale="fr-FR"
      theme="dark"
      stars={[4, 5]}
      reviewLanguages={["fr"]}
      starColor="blue"
      sku="SKU_EXAMPLE_2"
      fontFamily="Oxygen"
    />
  );
}

export default App;
```

---

🚀 **Your Trustpilot library is now ready to be integrated into your React project!**
