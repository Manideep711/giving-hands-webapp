
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DonationCard } from "@/components/DonationCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { mockDonationItems, mockCategories } from "@/lib/mock-data";
import { DonationItem } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

const Donations = () => {
  const [items, setItems] = useState<DonationItem[]>(mockDonationItems);
  const [filteredItems, setFilteredItems] = useState<DonationItem[]>(mockDonationItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  // Filter items based on search query and selected category
  useEffect(() => {
    let result = items;
    
    if (searchQuery) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    setFilteredItems(result);
  }, [searchQuery, selectedCategory, items]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(undefined);
  };

  const handleRequestItem = (itemId: string) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in to request this item",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Request Sent",
      description: "Your request has been sent to the donor",
    });
  };

  const handleMarkAsPicked = (itemId: string) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, status: "picked" } : item
      )
    );
    
    toast({
      title: "Item Updated",
      description: "Item has been marked as picked",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Available Donations
          </h1>
          <p className="text-lg text-gray-600">
            Browse through items donated by generous individuals in your community
          </p>
        </div>
        
        <div className="mb-6">
          <Input
            placeholder="Search by name, description, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>
        
        <CategoryFilter 
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No items found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredItems.map(item => (
              <DonationCard
                key={item.id}
                item={item}
                userRole={userRole}
                onRequest={() => handleRequestItem(item.id)}
                onMarkAsPicked={() => handleMarkAsPicked(item.id)}
              />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Donations;
