
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DonationCard } from "@/components/DonationCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { mockDonationItems } from "@/lib/mock-data";
import { DonationItem, User } from "@/lib/types";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [myDonations, setMyDonations] = useState<DonationItem[]>([]);
  const [requestedItems, setRequestedItems] = useState<DonationItem[]>([]);
  
  useEffect(() => {
    // In a real app, this would come from auth context or API
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        
        // Simulate fetching user's donations
        if (parsedUser.role === "donor") {
          setMyDonations(mockDonationItems.filter(item => item.donorId === parsedUser.id));
        }
        
        // Simulate fetching requested items
        if (parsedUser.role === "recipient") {
          // For demo, just show some random items as "requested"
          setRequestedItems(mockDonationItems.slice(0, 2));
        }
      } catch (error) {
        console.error("Failed to parse user data", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isLoggedIn={true} 
        userRole={user.role}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}</h1>
              <p className="text-gray-600">
                {user.role === "donor" && "Manage your donations and see the impact you're making"}
                {user.role === "recipient" && "Find items you need and track your requests"}
                {user.role === "agent" && "Help facilitate donations and make a difference"}
                {user.role === "admin" && "Manage the platform and oversee all activities"}
              </p>
            </div>
            
            {user.role === "donor" && (
              <Button 
                onClick={() => navigate("/donate")}
                className="mt-4 md:mt-0 bg-giving-600 hover:bg-giving-700"
              >
                Donate New Item
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Role</CardTitle>
                <CardDescription>Your account type</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold capitalize">{user.role}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Donations</CardTitle>
                <CardDescription>Items you've donated</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">
                  {user.role === "donor" ? myDonations.length : "-"}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Requests</CardTitle>
                <CardDescription>Items you've requested</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">
                  {user.role === "recipient" ? requestedItems.length : "-"}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {user.role === "donor" && <TabsTrigger value="my-donations">My Donations</TabsTrigger>}
              {user.role === "recipient" && <TabsTrigger value="my-requests">My Requests</TabsTrigger>}
              {user.role === "agent" && <TabsTrigger value="assignments">My Assignments</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome to Your Dashboard</CardTitle>
                  <CardDescription>
                    Here's an overview of your activity on Giving Hands
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      Thank you for being part of our community! From here you can:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      {user.role === "donor" && (
                        <>
                          <li>Donate new items to those in need</li>
                          <li>Track the status of your donations</li>
                          <li>See who has requested your items</li>
                        </>
                      )}
                      {user.role === "recipient" && (
                        <>
                          <li>Browse available donations</li>
                          <li>Request items you need</li>
                          <li>Track the status of your requests</li>
                        </>
                      )}
                      {user.role === "agent" && (
                        <>
                          <li>View donation pickup assignments</li>
                          <li>Coordinate between donors and recipients</li>
                          <li>Mark items as delivered</li>
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {user.role === "donor" && (
              <TabsContent value="my-donations">
                {myDonations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myDonations.map(item => (
                      <DonationCard
                        key={item.id}
                        item={item}
                        showActions={false}
                      />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-lg text-gray-600 mb-4">You haven't donated any items yet</p>
                        <Button 
                          onClick={() => navigate("/donate")}
                          className="bg-giving-600 hover:bg-giving-700"
                        >
                          Donate Your First Item
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            )}
            
            {user.role === "recipient" && (
              <TabsContent value="my-requests">
                {requestedItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {requestedItems.map(item => (
                      <DonationCard
                        key={item.id}
                        item={item}
                        showActions={false}
                      />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-lg text-gray-600 mb-4">You haven't requested any items yet</p>
                        <Button 
                          onClick={() => navigate("/donations")}
                          className="bg-caring-600 hover:bg-caring-700"
                        >
                          Browse Available Donations
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            )}
            
            {user.role === "agent" && (
              <TabsContent value="assignments">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-600 mb-4">No active assignments yet</p>
                      <p className="text-sm text-gray-500">
                        You'll be notified when you're assigned to facilitate a donation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
