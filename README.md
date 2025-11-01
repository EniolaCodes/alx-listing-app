# ALX LISTING APP

## Description & Goals

The ALX Listing App is an ambitious project that aims to recreate the sophisticated and user-friendly experience of Airbnb's property listing platform. This modern web application serves as both a learning platform and a practical demonstration of contemporary web development practices.

### Primary Goals

1. **User Experience Excellence**

   - Create an intuitive and responsive interface for property browsing
   - Implement smooth transitions and loading states
   - Ensure accessibility compliance for all users

2. **Feature Completeness**

   - Develop comprehensive property listing pages with detailed information
   - Implement advanced search and filtering capabilities
   - Create interactive image galleries with modern carousel functionality
   - Build responsive pricing components with seasonal variations

3. **Technical Achievement**

   - Utilize Next.js 15's latest features for optimal performance
   - Implement TypeScript for enhanced code reliability
   - Create reusable UI components using TailwindCSS
   - Ensure mobile-first responsive design

## Project Structure

#### Components Directory

- **common/**: Houses reusable components used throughout the application
  - `Button.tsx`: A versatile button component supporting multiple variants (primary, secondary, outline, ghost), sizes, and loading states. Used for actions like "Book Now," "Contact Host," and "View Details"
  - `Card.tsx`: Property card component displaying listing information including images, title, price, and key amenities with hover effects and interaction states

#### Core Files

- **interfaces/index.ts**

  ```typescript
  // Type definitions for component props
  interface CardProps {
    title: string;
    description?: string;
    image?: string;
    // ... other card properties
  }

  interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    // ... other button properties
  }
  ```

- **constants/index.ts**

  ```typescript
  Set up constants to store any reusable data or strings such as API URLs, configuration settings, or UI text.

  ```

#### Assets Organization

- **public/assets/**
  - **images/**: Property photos, amenity icons, user avatars
  - **icons/**: UI icons (SVG format) for navigation, actions, and indicators
  - All assets are optimized for web delivery and responsive display

### Development Guidelines

- Components follow atomic design principles
- TypeScript ensures type safety across the application
- TailwindCSS provides consistent styling and theming
- Mobile-first approach with responsive breakpoints
- Modular architecture for easy maintenance and scaling

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
