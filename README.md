# 🔥 Heritique

A modern React application with **Firebase Authentication**, built with **Vite**, **React 19**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. Features email/password authentication, Google OAuth, and a complete state management system.

---

## ✨ Features

- ⚡ **Vite** - Lightning-fast development with HMR
- ⚛️ **React 19** - Latest React with modern hooks
- 🔥 **Firebase Authentication** - Email/password + Google OAuth
- 📦 **Redux Toolkit** - State management with RTK Query
- 🎨 **Tailwind CSS 4** + **DaisyUI** - Modern, utility-first styling
- 🎭 **Material-UI** - Rich component library
- 🛣️ **React Router v6** - Client-side routing
- 📝 **TypeScript 5** - Type-safe development
- 🔔 **Firebase Cloud Messaging** - Push notifications
- ✅ **Form Validation** - Zod + React Hook Form
- 🍞 **Toast Notifications** - Sonner for user feedback
- 💾 **Redux Persist** - State persistence

---

## 📁 Project Structure

```
heritique/
├── public/                      # Static assets
│   └── favicon.ico
│
├── src/
│   ├── main.tsx                 # Application entry point
│   ├── App.tsx                  # Root component with routing
│   ├── vite-env.d.ts           # Vite type definitions
│   │
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── LoginPage.tsx        # Login page
│   │   └── RegistrationPage.tsx # Registration page
│   │
│   ├── components/              # Reusable components
│   │   ├── LoginForm.tsx
│   │   ├── RegistrationForm.tsx
│   │   ├── ProtectedRoute.tsx  # Auth wrapper (not currently used)
│   │   ├── Spinner/
│   │   │   └── Spinner.tsx
│   │   └── Skeletons/
│   │       ├── AuthCardSkeleton.tsx
│   │       └── RegistrationFormSkeleton.tsx
│   │
│   ├── redux/                   # State management
│   │   ├── store/
│   │   │   ├── store.ts         # Redux store configuration
│   │   │   └── StoreProvider.tsx # Redux provider
│   │   ├── slices/
│   │   │   ├── sync/            # Synchronous reducers
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── userSlice.ts
│   │   │   │   ├── appSlice.ts
│   │   │   │   └── fcmSlice.ts
│   │   │   └── api/             # RTK Query APIs
│   │   │       ├── apiSlice.ts
│   │   │       └── authAPISlice.ts
│   │   └── reduxHooks.ts        # Typed Redux hooks
│   │
│   ├── lib/
│   │   ├── firebase/            # Firebase configuration
│   │   │   ├── firebase.config.ts
│   │   │   ├── firebaseAuth.ts
│   │   │   └── firebaseFCM.ts
│   │   └── utils/               # Utility functions
│   │       ├── ErrorHelper.ts
│   │       ├── GetDashboardPath.ts
│   │       ├── GetDeviceInfo.ts
│   │       └── Icon.ts
│   │
│   ├── helpers/                 # Helper functions
│   │   ├── ToastHelper.ts
│   │   └── SessionHelper.ts
│   │
│   ├── types/                   # TypeScript interfaces
│   │   ├── Auth.ts
│   │   ├── User.ts
│   │   └── Error.ts
│   │
│   ├── schemas/                 # Zod validation schemas
│   │   └── AuthSchema.ts
│   │
│   ├── enums/                   # TypeScript enums
│   │   ├── Common.ts
│   │   └── Role.ts
│   │
│   ├── styles/                  # CSS modules
│   │   └── Auth.module.css
│   │
│   └── app/                     # Legacy Next.js files (can be deleted)
│       └── globals.css          # Global styles
│
├── .env                         # Environment variables (Vite format)
├── .env.example                 # Environment template
├── index.html                   # HTML entry point
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── tsconfig.node.json          # Node TypeScript config
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🛣️ Current Routes

**All routes are public** - Authentication is available but not required:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Landing page with project overview |
| `/login` | `LoginPage` | Login with email/password or Google |
| `/registration` | `RegistrationPage` | Create new account |
| `/dashboard` | Dashboard | Main dashboard (coming soon) |

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** v18.x or higher
- **npm** or **yarn**
- **Firebase project** with Authentication enabled

---

## 🚀 Getting Started

### 1. 📥 Install Dependencies

```bash
npm install
```

### 2. ⚙️ Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Site URL (Vite dev server runs on port 3000)
VITE_SITE_URL=http://localhost:3000

# Backend API URL
VITE_BASE_URL=http://localhost:7000/api/v1

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_FIREBASE_VAPID_KEY=your_vapid_key
```

**Note:** See `.env.example` for a template.

### 3. 💻 Run Development Server

```bash
npm run dev
```

Opens at: **http://localhost:3000**

### 4. 🛠️ Build for Production

```bash
npm run build
```

Output directory: `dist/`

### 5. 🚢 Preview Production Build

```bash
npm start
```

Serves production build at: **http://localhost:3000**

### 6. 🧹 Lint Code

```bash
npm run lint
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm start` | Serve production build on port 3000 |
| `npm run lint` | Run ESLint |

---

## 🔐 Authentication System

### Current Status

Authentication is **available but not required**. All routes are public by default.

### Firebase Services

- ✅ Email/Password authentication
- ✅ Google OAuth login
- ✅ Email verification
- ✅ Firebase Cloud Messaging (FCM)
- ✅ Session persistence

### How to Enable Protected Routes

If you want to protect routes later, wrap them with `ProtectedRoute`:

```tsx
import ProtectedRoute from './components/ProtectedRoute';

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
```

---

## 🎨 Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Material-UI** - React component library
- **Emotion** - CSS-in-JS
- **CSS Modules** - Scoped component styles

### Custom Theme Colors

```css
--color-primary-500: #2186e8   /* Blue */
--color-secondary-500: #5e42e6 /* Purple */
--color-error-500: #ff0000     /* Red */
--color-success-600: #76e533   /* Green */
--color-warning-500: #ff764a   /* Orange */
```

---

## 📊 State Management

### Redux Store Structure

```
State
├── auth          # Authentication status
├── user          # User profile data
├── app           # App UI state
├── fcm           # FCM notification state
└── api           # RTK Query cache
```

### Usage

```tsx
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';

// Get state
const user = useAppSelector(state => state.user);

// Dispatch actions
const dispatch = useAppDispatch();
dispatch(setUser(userData));
```

---

## 🌐 API Integration

API calls are proxied through Vite:

```typescript
// vite.config.ts
proxy: {
  '/api': {
    target: 'http://localhost:7000/api/v1',
    changeOrigin: true,
  }
}
```

API calls to `/api/*` are automatically proxied to your backend.

---

## 📦 Build Output

Production build creates optimized chunks:

```
dist/
├── index.html
└── assets/
    ├── index-[hash].css          (~38KB gzipped: 8KB)
    ├── react-vendor-[hash].js    (~34KB gzipped: 12KB)
    ├── redux-vendor-[hash].js    (~38KB gzipped: 14KB)
    ├── firebase-*-[hash].js      (~217KB gzipped: 45KB)
    └── index-[hash].js           (~357KB gzipped: 106KB)
```

**Total bundle size: ~190KB gzipped**

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

1. Build: `npm run build`
2. Publish directory: `dist`

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

### Docker

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🧰 Tech Stack

### Core
- React 19.0.0
- TypeScript 5.9.3
- Vite 5.4.21

### State Management
- Redux Toolkit 2.7.0
- Redux Persist 6.0.0
- RTK Query

### Authentication
- Firebase 11.6.0
- Firebase Auth
- Firebase Cloud Messaging

### Routing
- React Router v6.28.0

### UI & Styling
- Tailwind CSS 4.1.14
- DaisyUI 5.2.3
- Material-UI 7.1.2
- Emotion 11.14.0
- Lucide React (icons)

### Forms & Validation
- React Hook Form
- Zod 3.25.46
- React Select
- React Phone Input

### Utilities
- Axios 1.11.0
- Day.js / Date-fns
- Bowser (browser detection)
- Sonner (toast notifications)

---

## 🐛 Troubleshooting

### Environment Variables Not Working

- Restart dev server after changing `.env`
- Ensure variables start with `VITE_`
- Use `import.meta.env.VITE_*` not `process.env`

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Firebase Connection Issues

- Check Firebase config in `.env`
- Ensure Firebase project has Authentication enabled
- Verify API keys are correct

---

## 📚 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Firebase Web SDK](https://firebase.google.com/docs/web/setup)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📝 Migration Notes

This project was migrated from **Next.js 15** to **Vite + React**. See [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) for details.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 🎉 Acknowledgments

- Built with ❤️ using modern web technologies
- Powered by Firebase and React ecosystem
- Styled with Tailwind CSS

---

**Happy Coding! 🚀**
