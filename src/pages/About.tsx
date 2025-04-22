
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} onLogout={() => {}} />
      
      <main className="flex-grow">
        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Giving Hands
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Giving Hands is a platform that connects donors, recipients, and volunteer agents to 
                facilitate the donation process. Our mission is to reduce waste and help those in need.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
                How It Works
              </h2>
              
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-giving-600 text-white mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Donors</h3>
                  <p className="text-gray-600 mb-6">
                    People with items they no longer need can create an account and list them for donation. 
                    They provide details about the item, its condition, and where it can be picked up.
                  </p>
                  <Link to="/register">
                    <Button variant="outline" className="w-full border-giving-500 text-giving-700 hover:bg-giving-50">
                      Become a Donor
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-caring-600 text-white mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Recipients</h3>
                  <p className="text-gray-600 mb-6">
                    People in need can browse available donations and request items they need. 
                    They coordinate with agents to arrange pickup or delivery.
                  </p>
                  <Link to="/register">
                    <Button variant="outline" className="w-full border-caring-500 text-caring-700 hover:bg-caring-50">
                      Register as Recipient
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-giving-600 text-white mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Agents</h3>
                  <p className="text-gray-600 mb-6">
                    Volunteer agents help facilitate the donation process by coordinating between donors and recipients,
                    arranging pickups and deliveries, and ensuring items reach those who need them.
                  </p>
                  <Link to="/register">
                    <Button variant="outline" className="w-full border-giving-500 text-giving-700 hover:bg-giving-50">
                      Volunteer as Agent
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                At Giving Hands, we believe in the power of community and sharing. Our mission is to:
              </p>
              
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="bg-giving-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-giving-700 mb-4">Reduce Waste</h3>
                  <p className="text-gray-600">
                    By connecting donors with recipients, we help reduce waste by giving items a second life
                    instead of ending up in landfills.
                  </p>
                </div>
                
                <div className="bg-caring-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-caring-700 mb-4">Help Those in Need</h3>
                  <p className="text-gray-600">
                    We provide a platform for people to access essential items they might not otherwise be able to afford.
                  </p>
                </div>
                
                <div className="bg-caring-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-caring-700 mb-4">Build Community</h3>
                  <p className="text-gray-600">
                    We foster connections between people, strengthening community bonds through acts of generosity and gratitude.
                  </p>
                </div>
                
                <div className="bg-giving-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-giving-700 mb-4">Enable Volunteerism</h3>
                  <p className="text-gray-600">
                    We provide opportunities for people to volunteer their time and skills to help others in their community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have items to donate, need something, or want to volunteer, 
                we welcome you to our community of giving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="w-full sm:w-auto bg-giving-600 hover:bg-giving-700">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/donations">
                  <Button variant="outline" className="w-full sm:w-auto border-giving-500 text-giving-700 hover:bg-giving-50">
                    Browse Donations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
