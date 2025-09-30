# TrueClaim - Fraud Recovery Platform

## Overview

TrueClaim is a web application designed to help victims of fraud (romance scams, crypto fraud, investment scams, etc.) connect with fraud recovery professionals. The platform allows users to submit their case details through a secure contact form and provides information about the recovery process through a marketing-focused landing page.

The application is built as a full-stack TypeScript application with a React frontend and Express backend, using modern web development practices and a component-based UI architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with component-based design

**UI Component System:**
- Shadcn/UI component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system with CSS variables for theming (colors, shadows, spacing)
- Responsive design patterns with mobile-first approach

**State Management:**
- TanStack Query (React Query) for server state management and API caching
- React Hook Form with Zod for form state and validation
- Local component state using React hooks

**Form Handling:**
- React Hook Form for performant form management
- Zod schemas for runtime validation
- Integration with Shadcn form components for consistent UX

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for type-safe server development
- Custom Vite middleware integration for development mode
- Static file serving in production mode

**API Design:**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Validation using Zod schemas shared between frontend and backend
- Error handling with appropriate HTTP status codes

**Storage Layer:**
- Abstract storage interface (`IStorage`) for data persistence
- In-memory storage implementation (`MemStorage`) for development/demo
- Prepared for database migration with Drizzle ORM schema definitions
- UUID-based entity identification

**Data Models:**
- User model (id, username, password)
- Contact submission model (id, name, email, phone, scamType, amountLost, description, agreeToTerms, createdAt)

### External Dependencies

**Database (Prepared but not yet integrated):**
- PostgreSQL as the target database system
- Drizzle ORM for type-safe database queries and migrations
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema defined in `shared/schema.ts` with Drizzle table definitions

**Authentication (Schema prepared):**
- User authentication system prepared but not implemented
- Password hashing and session management to be added

**Third-Party Services:**
- None currently integrated
- Email service integration recommended for contact form notifications

**UI Dependencies:**
- Radix UI primitives for accessible component foundations
- Lucide React for consistent iconography
- Class Variance Authority (CVA) for component variant management
- Tailwind Merge and CLSX for dynamic className composition

**Development Tools:**
- Replit-specific Vite plugins for development environment integration
- ESBuild for production server bundling
- TypeScript compiler for type checking

### Build & Deployment

**Development:**
- `npm run dev` runs server with Vite middleware for HMR
- Vite proxy setup for API requests during development
- Source maps enabled for debugging

**Production:**
- `npm run build` compiles client with Vite and bundles server with ESBuild
- Static assets served from `dist/public`
- Express serves both API and static files
- Server runs as ESM module

**Project Structure:**
- `/client` - React frontend application
- `/server` - Express backend application  
- `/shared` - Shared TypeScript types and schemas
- `/migrations` - Database migration files (prepared for Drizzle)

### Key Architectural Decisions

**Monorepo Structure:**
- Client, server, and shared code in single repository
- Path aliases configured for clean imports (`@/`, `@shared/`)
- Shared validation schemas prevent client-server drift

**Type Safety:**
- End-to-end TypeScript for compile-time safety
- Zod for runtime validation matching TypeScript types
- Drizzle ORM for type-safe database operations

**Validation Strategy:**
- Shared Zod schemas between frontend and backend
- Client-side validation for UX
- Server-side validation for security
- Automatic TypeScript type inference from Zod schemas

**Database Design:**
- PostgreSQL prepared with Drizzle ORM
- Migration-based schema management
- UUID primary keys using database function `gen_random_uuid()`
- Currently using in-memory storage as placeholder

**Styling Approach:**
- Utility-first CSS with Tailwind
- Component variants using CVA
- Design tokens via CSS custom properties
- Responsive breakpoints and mobile-first design