
// Define types for our application
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'donor' | 'agent' | 'recipient' | 'admin';
}

export interface DonationItem {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  image: string;
  status: 'available' | 'picked';
  donorId: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
