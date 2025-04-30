
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-eaststreet-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-eaststreet-brown">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-eaststreet-brown mb-4">Page Not Found</h1>
          <p className="text-eaststreet-gray mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <Link to="/" className="btn-primary block">
            Return to Home
          </Link>
          <Link to="/contact" className="text-eaststreet-brown hover:text-eaststreet-light-brown inline-block">
            Contact Us for Help
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
