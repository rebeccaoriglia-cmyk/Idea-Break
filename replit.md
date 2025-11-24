# Idea Break - Creative Break Application

## Overview

Idea Break is a wellness-focused web application designed to provide quick creative breaks through various activity categories. The application offers users short, engaging creative prompts across different categories (creative writing, theatrical exercises, sketching, mental reset, and surprise activities) to help users take meaningful mental breaks during their day.

The application is built as a full-stack TypeScript application using React for the frontend, Express for the backend, and is designed to be deployable on Replit with PostgreSQL database support via Neon.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- Framer Motion for animations and transitions

**UI Component System**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom wellness-inspired design system inspired by meditation apps (Calm, Headspace)
- Responsive design with mobile-first approach

**State Management**
- TanStack Query (React Query) for server state management
- Local component state for UI interactions
- Custom hooks for reusable logic (e.g., `use-mobile`, `use-toast`)

**Key Design Decisions**
- Component-based architecture with clear separation of concerns
- Activity data stored in local TypeScript files (`lib/activities.ts`) rather than database for quick iterations
- Animation-heavy interface to create a calming, engaging user experience
- Category-based navigation with visual color coding

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the API server
- Dual-mode setup: development (with Vite middleware) and production (serving static files)
- Session-based architecture prepared (though not currently implemented)

**API Strategy**
- RESTful API design pattern
- Routes prefixed with `/api` for clear separation from frontend routes
- Middleware for JSON parsing and request logging
- Placeholder for future CRUD operations via storage interface

**Development vs Production**
- Development: Vite dev server integrated as Express middleware with HMR
- Production: Static file serving from `dist/public`
- Environment-aware configuration

### Data Storage Solutions

**Database Setup**
- Drizzle ORM for type-safe database operations
- PostgreSQL via Neon Database (serverless Postgres)
- Schema defined in TypeScript with Drizzle and Zod validation

**Current Implementation**
- Minimal database schema with users table as example
- In-memory storage interface (`MemStorage`) for development
- Database credentials via environment variables
- Migration support through Drizzle Kit

**Design Rationale**
- Activities stored in-memory (TypeScript) for simplicity and performance
- Database prepared for future user authentication and activity tracking
- Type-safe schema definitions prevent runtime errors

### Component Structure

**Page Components**
- `Home.tsx`: Main application page with category selection and activity display
- `not-found.tsx`: 404 error page

**Feature Components**
- `Header.tsx`: Application header with logo, title, and theme toggle
- `CategoryButton.tsx`: Interactive category selection cards with color coding
- `ActivityCard.tsx`: Display card for showing activities with animations and actions

**UI Components**
- Comprehensive shadcn/ui component library (40+ components)
- Consistent styling through CSS variables and Tailwind utilities
- Accessible components using Radix UI primitives

### Styling System

**Design Tokens**
- HSL-based color system with CSS variables for easy theming
- Support for light and dark modes
- Custom color palettes for different activity categories
- Elevation system using subtle shadows and overlays

**Typography**
- Inter and DM Sans as primary fonts
- Hierarchical sizing: 32-40px headers, 16-18px body text
- Consistent spacing using Tailwind's spacing scale

**Layout Patterns**
- Maximum content width of `max-w-4xl` for readability
- Generous whitespace (p-8 mobile, p-12 desktop)
- Full viewport height layouts with flexbox
- Grid-based category buttons (2 columns mobile, 5 columns desktop)

## External Dependencies

### Third-Party Services

**Database**
- Neon Database: Serverless PostgreSQL provider
- Connection managed via `@neondatabase/serverless` package
- Credentials stored in `DATABASE_URL` environment variable

### Key NPM Packages

**Frontend**
- `@tanstack/react-query`: Server state management and caching
- `framer-motion`: Animation library for smooth transitions
- `wouter`: Lightweight routing
- `lucide-react`: Icon library
- `date-fns`: Date manipulation utilities

**UI Components**
- `@radix-ui/*`: Accessible primitive components (20+ packages)
- `class-variance-authority`: Type-safe component variants
- `tailwindcss`: Utility-first CSS framework
- `cmdk`: Command menu component

**Backend**
- `express`: Web server framework
- `drizzle-orm`: Type-safe ORM
- `drizzle-zod`: Zod schema integration
- `connect-pg-simple`: PostgreSQL session store

**Development Tools**
- `vite`: Build tool and dev server
- `tsx`: TypeScript execution for Node.js
- `esbuild`: JavaScript bundler for production
- `@replit/*`: Replit-specific development plugins

### Build & Development Pipeline

**Development Mode**
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript compilation on-the-fly
- Replit-specific plugins for enhanced development experience

**Production Build**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Environment-based configuration switching

**Database Management**
- `drizzle-kit push`: Schema synchronization with database
- Migration files stored in `./migrations`
- Schema definitions in `shared/schema.ts` for code sharing between client and server