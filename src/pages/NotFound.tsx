
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} onLogout={() => {}} />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-caring-600 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-8">Page Not Found</p>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link to="/">
            <Button className="bg-giving-600 hover:bg-giving-700">
              Go Back Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
