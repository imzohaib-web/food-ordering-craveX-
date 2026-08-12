# CraveX

CraveX is a premium food ordering website built with React and Vite. It presents a polished restaurant storefront with menu browsing, product customization, cart management, checkout, offers, favorites, order confirmation, and order tracking flows.

![Uploading Screenshot 2026-08-12 121128.png…]()


## Features

- Modern responsive landing page for a fast-food brand experience
- Menu browsing with categories, search, filtering, sorting, and product cards
- Product detail pages with size, crust, spice, drink, and extras customization
- Persistent cart flow with quantity controls, promo code UI, and order summary
- Checkout screens for contact information, delivery details, delivery method, and payment method
- Favorites, profile, order history, order confirmation, and track-order pages
- Offers, deals, testimonials, about, and contact sections
- Smooth UI motion with Framer Motion and iconography from Lucide React
- Centralized data, cart calculations, checkout validation, and order status helpers

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Oxlint

## Project Structure

```text
src/
  components/      Reusable UI sections and feature components
  context/         Cart, auth, and favorites state providers
  data/            Products, deals, offers, reviews, and demo orders
  hooks/           Shared React hooks
  pages/           Route-level screens
  routes/          App route declarations
  styles/          Global styles
  utils/           Cart, checkout, and order helper logic
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local Vite URL shown in your terminal.

### Build For Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```


