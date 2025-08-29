# Overview

This is a professional IT company website built with Next.js 15 and React 19, featuring a modern, animated landing page. The project showcases KHODITECH, an IT company based in Binbrook, Ontario, Canada, specializing in website and mobile application development. The site includes a hero section with animated text trails, multiple landing sections with alternating backgrounds, a liquid navigation overlay, and is built using cutting-edge frontend technologies with smooth animations powered by Framer Motion.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Next.js 15** with App Router architecture for modern React development
- **TypeScript** for type safety and better developer experience
- **React 19** leveraging the latest React features and improvements

## Styling and Design System
- **Tailwind CSS v4** for utility-first styling with PostCSS integration
- **Custom font integration** using Gotham Bold via font-face declarations
- **Responsive design** with clamp() functions for fluid typography
- **Dark mode support** through CSS custom properties and media queries

## Animation and Interactivity
- **Framer Motion** for complex animations including:
  - Image trail effects on mouse movement
  - Liquid overlay navigation transitions
  - Text animation sequences
  - Component entrance/exit animations

## Component Architecture
- **Client-side components** using "use client" directive for interactive elements
- **Modular component structure** with reusable UI components
- **Props-based customization** for flexible component configuration
- **TypeScript interfaces** for component prop validation

## Development Tooling
- **Turbopack** integration for faster development builds
- **ESLint** with Next.js configuration for code quality
- **Custom TypeScript paths** using @ alias for clean imports

## Performance Optimizations
- **Font optimization** using Next.js font loading strategies
- **Image optimization** through Next.js built-in image handling
- **Code splitting** via Next.js automatic optimization
- **CSS-in-JS avoidance** using Tailwind for better performance

# External Dependencies

## Core Framework Dependencies
- **Next.js 15.5.0** - React framework for production applications
- **React 19.1.0** and **React DOM 19.1.0** - Latest React ecosystem
- **TypeScript 5.x** - Static type checking

## Styling and Animation
- **Tailwind CSS v4** - Utility-first CSS framework with PostCSS integration
- **Framer Motion 12.23.12** - Animation library for React components

## Development Tools
- **ESLint 9.x** with Next.js config - Code linting and formatting
- **@types packages** for Node, React, and React DOM - TypeScript definitions

## Font Resources
- **Geist font family** - Google Fonts integration via Next.js
- **Gotham Bold** - Custom font file served locally

## Build and Development
- **Turbopack** - Next.js bundler for faster development
- **PostCSS** - CSS processing via Tailwind integration

Note: The project is currently frontend-only with no database, authentication, or backend API integrations. All content is statically defined within components.