
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  userRole?: string;
  onLogout: () => void;
}

export function Navbar({ isLoggedIn, userRole, onLogout }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl">🤲</span>
              <span className="hidden text-xl font-bold text-giving-700 sm:inline-block">
                Giving Hands
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-caring-600 transition-colors">
              Home
            </Link>
            <Link to="/donations" className="text-sm font-medium hover:text-caring-600 transition-colors">
              Browse Donations
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-caring-600 transition-colors">
              How It Works
            </Link>
            {isLoggedIn && userRole === "donor" && (
              <Link to="/donate" className="text-sm font-medium hover:text-caring-600 transition-colors">
                Donate Items
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/dashboard" className="text-sm font-medium hover:text-caring-600 transition-colors">
                Dashboard
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-2">
            {isLoggedIn ? (
              <Button 
                variant="outline" 
                onClick={onLogout}
                className="border-giving-500 text-giving-700 hover:bg-giving-50"
              >
                Log Out
              </Button>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/login")}
                  className="border-giving-500 text-giving-700 hover:bg-giving-50"
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => navigate("/register")}
                  className="bg-giving-600 text-white hover:bg-giving-700"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
