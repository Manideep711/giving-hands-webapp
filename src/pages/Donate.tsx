
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DonationForm } from "@/components/DonationForm";
import { useToast } from "@/components/ui/use-toast";

const Donate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn] = useState(true); // In a real app, this would come from auth context
  
  const handleDonationSubmit = (donationData: any) => {
    console.log("Donation submitted:", donationData);
    
    // In a real app, this would be an API call
    
    toast({
      title: "Donation Submitted",
      description: "Thank you for your generosity! Your donation has been listed.",
    });
    
    // Redirect to donations page after successful submission
    navigate("/donations");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userRole="donor"
        onLogout={() => {}}
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Donate an Item
          </h1>
          <p className="text-lg text-gray-600">
            Your generous donation can make a significant difference in someone's life
          </p>
        </div>
        
        <DonationForm onSubmit={handleDonationSubmit} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
