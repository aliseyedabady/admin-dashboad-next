# Getting Started - Admin Dashboard

## 🚀 Quick Start Guide

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd /Users/ali/Documents/avise/admin-dashboad-next
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at:

- 🌐 **http://localhost:3000**

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Code Quality

Format code with Prettier:

```bash
npm run format
```

Check code formatting:

```bash
npm run format:check
```

Run ESLint:

```bash
npm run lint
```

## 🔐 Login Instructions

The dashboard uses **mock authentication** for demonstration purposes.

### Login Credentials

You can use **any email and password** to log in:

**Example:**

- Email: `admin@example.com`
- Password: `password123`

Or literally anything else will work:

- Email: `test@test.com`
- Password: `test`

### What Happens on Login?

1. Your credentials are stored in **localStorage**
2. You're redirected to `/dashboard`
3. Your session persists until you logout

### Logout

Click on your avatar in the top-right corner → "Log out"

## 📱 Navigation

### Main Menu (Sidebar)

- **Dashboard** - Overview with statistics, charts, and recent orders
- **Users** - User management with filtering and sorting
- **Orders** - Complete order list
- **Reports** - Analytics and detailed reports
- **Settings** - User preferences and account settings

### Top Bar (Navbar)

- **Search** - Search functionality (UI only)
- **Theme Toggle** - Switch between light/dark mode
- **User Menu** - Profile settings and logout

## 🎨 Features Overview

### Dashboard Page

- **4 Stat Cards** showing:
  - Total Sales
  - Total Users
  - Total Orders
  - Total Revenue
- **Area Chart** displaying sales trends over time
- **Recent Orders Table** with search functionality

### Users Page

- **Sortable table** - Click column headers to sort
- **Search** - Filter by name or email
- **Role filter** - Filter by Admin, Editor, or Viewer
- **Status filter** - Filter by Active or Inactive
- **Pagination** - Navigate through pages of users

### Orders Page

- List of all customer orders
- Status badges (Completed, Pending, Cancelled)

### Reports Page

- Summary cards with key metrics
- Overview chart
- Sales by category
- Top performing products

### Settings Page

- **Profile settings** - Update name and email
- **Theme selection** - Choose Light, Dark, or System theme
- **Notifications** - Toggle email and push notifications
- Changes are saved to localStorage

## 🎨 Theme Customization

### Switch Themes

1. Click the **sun/moon icon** in the top navigation bar
2. Or go to **Settings** → Appearance → Theme dropdown

### Available Themes

- **Light** - Bright, clean interface
- **Dark** - Easy on the eyes in low-light
- **System** - Follows your OS preference

### Customize Colors

Edit `src/app/globals.css` and modify CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Change primary color */
  --secondary: 210 40% 96.1%; /* Change secondary color */
  /* ... more variables ... */
}
```

## 📊 Working with Data

### Mock Data Location

All mock data is stored in JSON files:

- `src/data/mock-users.json` - User list
- `src/data/mock-orders.json` - Order list
- `src/data/mock-stats.json` - Dashboard statistics
- `src/data/mock-chart.json` - Chart data

### Modifying Mock Data

Simply edit the JSON files and refresh the page. Changes will appear immediately.

### Adding Real API Integration

Replace mock API calls in `src/lib/api.ts`:

```typescript
// Before (mock)
export const api = {
  getUsers: async (): Promise<User[]> => {
    await delay(500);
    return mockUsers as User[];
  },
};

// After (real API)
export const api = {
  getUsers: async (): Promise<User[]> => {
    const response = await fetch("https://api.example.com/users");
    return response.json();
  },
};
```

## 🧩 Project Structure

```
src/
├── app/              # Pages and routes
├── components/       # Reusable components
│   ├── ui/          # Base UI components
│   ├── layout/      # Layout components
│   └── dashboard/   # Dashboard-specific
├── lib/             # Utilities and helpers
├── hooks/           # Custom React hooks
├── providers/       # Context providers
├── types/           # TypeScript definitions
└── data/            # Mock JSON data
```

See **PROJECT_STRUCTURE.md** for detailed breakdown.

## 🛠️ Common Tasks

### Add a New Page

1. Create `src/app/(dashboard)/my-page/page.tsx`
2. Add route to sidebar in `src/components/layout/sidebar.tsx`

### Add a New Component

1. Create `src/components/ui/my-component.tsx`
2. Import and use in your pages

### Change Sidebar Links

Edit `src/components/layout/sidebar.tsx`:

```typescript
const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  // Add more items here
];
```

### Modify Dashboard Stats

Edit `src/data/mock-stats.json`:

```json
{
  "sales": {
    "value": 99999,
    "change": 50.0
  }
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your dashboard is now live.

### Deploy to Other Platforms

The dashboard can be deployed to any platform that supports Next.js:

- **Netlify** - [docs](https://docs.netlify.com/frameworks/next-js/)
- **Cloudflare Pages** - [docs](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- **AWS Amplify** - [docs](https://docs.amplify.aws/guides/hosting/nextjs/)
- **Self-hosted** - Build and run with `npm run build && npm start`

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, use a different port:

```bash
PORT=3001 npm run dev
```

### Build Errors

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

### Module Not Found

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Theme Not Switching

Clear browser localStorage:

```javascript
// In browser console:
localStorage.clear();
location.reload();
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Lucide Icons](https://lucide.dev/)

## 💡 Tips

1. **Use the theme toggle** - Try both light and dark modes
2. **Test responsiveness** - Resize your browser to see mobile view
3. **Explore the code** - All components are well-documented
4. **Customize freely** - Every aspect is designed to be modified
5. **Check the console** - Useful development information appears there

## 🤝 Need Help?

If you encounter any issues:

1. Check this guide
2. Review **README.md**
3. Check **PROJECT_STRUCTURE.md** for file locations
4. Look at the code comments
5. Search Next.js documentation

---

**Happy coding! 🎉**

Enjoy building with your new admin dashboard template!
