# TrueClaim - Fraud Recovery Platform

## Overview

TrueClaim is a web application designed to help victims of fraud (romance scams, crypto fraud, investment scams, etc.) connect with fraud recovery professionals. The platform allows users to submit their case details through a secure contact form and provides information about the recovery process through a marketing-focused landing page.

The application is built as a full-stack TypeScript application with a React frontend and Express backend, using modern web development practices and a component-based UI architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**Hero Section Video Sequence (November 19, 2025):**
- Implemented 7-video sequential playback with crossfade transitions
- Videos play in specific order: Video 1 → Video 2 → Videos 3-7 → loop back to Video 1
- Dual-video player system with opacity crossfades (1-second duration)
- Preloading logic: next video loads at 1.5s remaining, plays at 1.0s remaining
- Fallback mechanism ensures continuous playback if timing windows are missed
- Error handling for autoplay failures with console logging
- Maintains muted, inline playback for cross-browser compatibility

**Contact Form Improvements (October 2025):**
- Enhanced contact section with gradient background and improved card styling
- Updated button with gold gradient, larger size, and arrow icon
- Changed contact email to inquiry@trueclaimassociates.com throughout the site
- Added success dialog popup after form submission with checkmark icon
- Improved visual hierarchy with shadowed cards and hover effects
- Form submissions currently stored in memory
- **TODO**: Set up email service (Resend, SendGrid, or Gmail) to send contact form submissions to inquiry@trueclaimassociates.com

**Team Section Updates:**
- Added 12 professional team member photos with real names
- P. David Andress listed as CEO
- Key team members: Jason B Law, Domenic Miller, James Ashford, Jack S Chamberlain
- Alternating positions: Lawyer and Fraud Investigator
- Carousel displays 3 members on desktop, responsive on mobile

**Testimonials:**
- Auto-scrolling carousel with 3-second intervals
- 8 client reviews with 5-star ratings

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