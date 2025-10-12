# Admin Dashboard - Project Structure

## 📁 Complete Folder Structure

```
admin-dashboard-next/
├── public/                          # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── (auth)/                  # Authentication group
│   │   │   ├── login/
│   │   │   │   └── page.tsx         # Login page
│   │   │   ├── register/
│   │   │   │   └── page.tsx         # Register page
│   │   │   └── layout.tsx           # Auth layout wrapper
│   │   │
│   │   ├── (dashboard)/             # Dashboard group (protected)
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx         # Main dashboard
│   │   │   │   └── metadata.ts      # Page metadata
│   │   │   ├── users/
│   │   │   │   └── page.tsx         # Users management
│   │   │   ├── orders/
│   │   │   │   └── page.tsx         # Orders list
│   │   │   ├── reports/
│   │   │   │   └── page.tsx         # Reports & analytics
│   │   │   ├── settings/
│   │   │   │   └── page.tsx         # User settings
│   │   │   └── layout.tsx           # Dashboard layout (sidebar + navbar)
│   │   │
│   │   ├── globals.css              # Global styles & Tailwind
│   │   ├── layout.tsx               # Root layout (providers)
│   │   └── page.tsx                 # Home page (redirects)
│   │
│   ├── components/
│   │   ├── ui/                      # Reusable UI components (shadcn/ui style)
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── switch.tsx
│   │   │   └── table.tsx
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── navbar.tsx           # Top navigation bar
│   │   │   └── sidebar.tsx          # Collapsible sidebar
│   │   │
│   │   └── dashboard/               # Dashboard-specific components
│   │       ├── stat-card.tsx        # Statistic cards
│   │       ├── overview-chart.tsx   # Area chart component
│   │       └── recent-orders.tsx    # Orders table component
│   │
│   ├── lib/                         # Utility libraries
│   │   ├── utils.ts                 # Helper functions (cn, etc.)
│   │   ├── api.ts                   # API functions (mock data fetching)
│   │   └── auth.ts                  # Authentication logic (mock)
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── use-theme.tsx            # Theme management hook
│   │
│   ├── providers/                   # Context providers
│   │   ├── query-provider.tsx       # React Query provider
│   │   └── theme-provider.tsx       # Theme provider (next-themes)
│   │
│   ├── types/                       # TypeScript type definitions
│   │   └── index.ts                 # All TypeScript interfaces
│   │
│   └── data/                        # Mock data (JSON files)
│       ├── mock-users.json          # Sample user data
│       ├── mock-orders.json         # Sample order data
│       ├── mock-stats.json          # Dashboard statistics
│       └── mock-chart.json          # Chart data points
│
├── .gitignore                       # Git ignore rules
├── .prettierrc.json                 # Prettier configuration
├── .prettierignore                  # Prettier ignore rules
├── components.json                  # shadcn/ui configuration
├── eslint.config.mjs                # ESLint configuration
├── next.config.ts                   # Next.js configuration
├── next-env.d.ts                    # Next.js TypeScript declarations
├── package.json                     # Dependencies & scripts
├── package-lock.json                # Locked dependencies
├── postcss.config.mjs               # PostCSS configuration
├── README.md                        # Project documentation
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── vercel.json                      # Vercel deployment config
```

## 🎯 Key Files Explained

### Root Configuration Files

#### `package.json`

Contains all project dependencies and npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

#### `tsconfig.json`

TypeScript configuration with path aliases:

- `@/*` maps to `./src/*`

#### `tailwind.config.ts`

Tailwind CSS configuration with:

- Custom color palette using CSS variables
- Dark mode support
- Extended theme configuration

### Source Files

#### Authentication Pages (`src/app/(auth)/`)

- **login/page.tsx**: Login form with mock authentication
- **register/page.tsx**: Registration form
- **layout.tsx**: Centered layout with gradient background

#### Dashboard Pages (`src/app/(dashboard)/`)

- **dashboard/page.tsx**: Main dashboard with stats, chart, and table
- **users/page.tsx**: User management with sortable, filterable data table
- **orders/page.tsx**: Order listing page
- **reports/page.tsx**: Analytics and reports
- **settings/page.tsx**: User settings and preferences
- **layout.tsx**: Dashboard layout with sidebar and navbar

#### UI Components (`src/components/ui/`)

Reusable, styled components following shadcn/ui patterns:

- Buttons, Cards, Inputs, Tables, Badges, etc.
- All components use the `cn()` utility for className merging
- Fully typed with TypeScript

#### Layout Components (`src/components/layout/`)

- **navbar.tsx**: Top navigation with search, theme toggle, and user menu
- **sidebar.tsx**: Collapsible side navigation with route links

#### Utilities (`src/lib/`)

- **utils.ts**: Helper functions (e.g., `cn()` for className merging)
- **api.ts**: Mock API functions using React Query
- **auth.ts**: Mock authentication with localStorage

#### Data (`src/data/`)

JSON files containing mock data for development:

- Users, Orders, Statistics, Chart data

## 🎨 Styling System

### CSS Variables (in `globals.css`)

The project uses CSS custom properties for theming:

- `--background`, `--foreground`
- `--primary`, `--secondary`
- `--muted`, `--accent`
- `--destructive`, `--border`
- And more...

All colors have both light and dark mode variants.

### Tailwind Utilities

- Custom colors mapped to CSS variables
- Responsive breakpoints (sm, md, lg, xl, 2xl)
- Dark mode class strategy

## 🔐 Authentication Flow

1. User visits `/` → Redirected to `/login` (if not authenticated)
2. Login with any email/password → Stored in localStorage
3. Redirected to `/dashboard` after login
4. Protected routes check authentication via `mockAuth.isAuthenticated()`
5. Logout clears localStorage and redirects to `/login`

## 📊 Data Fetching

Uses **React Query** (`@tanstack/react-query`) for:

- Caching
- Automatic refetching
- Loading states
- Error handling

Example:

```typescript
const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: api.getUsers,
});
```

## 🎨 Theme System

Uses **next-themes** for theme management:

- Light mode
- Dark mode
- System preference
- Persistent theme selection

Toggle theme via navbar button or settings page.

## 📱 Responsive Design

All pages are fully responsive:

- Mobile: Collapsible menu, stacked layouts
- Tablet: Adjusted spacing, 2-column grids
- Desktop: Full sidebar, multi-column layouts

## 🚀 Production Deployment

The project is optimized for Vercel deployment:

1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

Environment variables can be added in Vercel dashboard or `.env.local` file.

## 🔧 Development Tips

### Adding New Pages

1. Create page in `src/app/(dashboard)/[page-name]/page.tsx`
2. Add route to sidebar navigation in `src/components/layout/sidebar.tsx`
3. Add metadata using Next.js `metadata` export

### Adding New Components

1. Create in `src/components/ui/[component-name].tsx`
2. Use `cn()` utility for className merging
3. Forward refs for proper DOM manipulation
4. Export named component + type if needed

### Customizing Colors

Edit CSS variables in `src/app/globals.css` under `:root` and `.dark` selectors.

### Adding Real API

Replace mock functions in `src/lib/api.ts` with real API calls:

```typescript
export const api = {
  getUsers: async () => {
    const response = await fetch("/api/users");
    return response.json();
  },
  // ...
};
```

## 📦 Dependencies

### Core

- **next**: ^15.5.4
- **react**: ^19.1.0
- **typescript**: ^5

### UI & Styling

- **tailwindcss**: ^4
- **class-variance-authority**: ^0.7.1
- **clsx**: ^2.1.1
- **tailwind-merge**: ^3.3.1
- **lucide-react**: ^0.545.0

### State & Data

- **@tanstack/react-query**: ^5.90.2
- **recharts**: ^3.2.1
- **next-themes**: ^0.4.6

### Dev Tools

- **eslint**: ^9
- **prettier**: ^3.6.2
- **prettier-plugin-tailwindcss**: ^0.6.14

## 🎯 Next Steps

For production use:

1. Replace mock auth with real authentication (NextAuth.js, Supabase, etc.)
2. Connect to real API endpoints
3. Add form validation (zod, react-hook-form)
4. Add error boundaries
5. Implement role-based access control
6. Add loading skeletons
7. Add more comprehensive tests
8. Set up analytics
9. Configure SEO metadata
10. Add PWA support (optional)

---

**Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui**
