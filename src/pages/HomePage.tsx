import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white-base to-secondary-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Welcome to Heritique
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            A modern React application with Firebase Authentication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="contentCard p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Firebase Integration</h3>
            <p className="text-neutral-600">
              Powered by Firebase Authentication with email/password and Google OAuth support
            </p>
          </div>

          <div className="contentCard p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Vite + React</h3>
            <p className="text-neutral-600">
              Built with Vite for lightning-fast development and optimized production builds
            </p>
          </div>

          <div className="contentCard p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Modern UI</h3>
            <p className="text-neutral-600">
              Styled with Tailwind CSS, DaisyUI, and Material-UI components
            </p>
          </div>

          <div className="contentCard p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Redux Toolkit</h3>
            <p className="text-neutral-600">
              State management with Redux Toolkit and RTK Query for efficient data fetching
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/dashboard" className="primaryBtn w-full sm:w-auto px-8">
            Go to Dashboard
          </Link>
          <Link to="/login" className="primaryOutlineBtn w-full sm:w-auto px-8">
            Login (Optional)
          </Link>
          <Link to="/registration" className="primaryOutlineBtn w-full sm:w-auto px-8">
            Sign Up
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-500 text-sm">
            🚀 Built with React 19, TypeScript, and modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
}
