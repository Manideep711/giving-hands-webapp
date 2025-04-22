
import { User, DonationItem, Category } from "./types";

// Mock users data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Donor",
    email: "john@example.com",
    role: "donor",
  },
  {
    id: "2",
    name: "Emily Agent",
    email: "emily@example.com",
    role: "agent",
  },
  {
    id: "3",
    name: "Sarah Recipient",
    email: "sarah@example.com",
    role: "recipient",
  },
  {
    id: "4",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
];

// Mock categories
export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Clothing",
    icon: "👕",
  },
  {
    id: "2",
    name: "Food",
    icon: "🍎",
  },
  {
    id: "3",
    name: "Furniture",
    icon: "🪑",
  },
  {
    id: "4",
    name: "Electronics",
    icon: "📱",
  },
  {
    id: "5",
    name: "Books",
    icon: "📚",
  },
  {
    id: "6",
    name: "Toys",
    icon: "🧸",
  },
];

// Mock donation items
export const mockDonationItems: DonationItem[] = [
  {
    id: "1",
    name: "Winter Jackets",
    description: "5 lightly used winter jackets in various sizes",
    category: "Clothing",
    location: "Downtown Community Center",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=500",
    status: "available",
    donorId: "1",
    createdAt: "2023-11-15T14:30:00Z",
  },
  {
    id: "2",
    name: "Non-perishable Food Items",
    description: "Canned goods, pasta, and rice - unopened and within expiration date",
    category: "Food",
    location: "North Food Bank",
    image: "https://images.unsplash.com/photo-1593113598332-cd59a93c6138?q=80&w=500",
    status: "available",
    donorId: "1",
    createdAt: "2023-11-18T09:45:00Z",
  },
  {
    id: "3",
    name: "Office Desk and Chair",
    description: "Gently used office furniture in good condition",
    category: "Furniture",
    location: "East Community Hub",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=500",
    status: "picked",
    donorId: "1",
    createdAt: "2023-11-10T11:15:00Z",
  },
  {
    id: "4",
    name: "Tablet Computer",
    description: "2-year old tablet, perfect working condition with charger",
    category: "Electronics",
    location: "Tech Center",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500",
    status: "available",
    donorId: "1",
    createdAt: "2023-11-20T16:00:00Z",
  },
  {
    id: "5",
    name: "Children's Books",
    description: "Collection of 20+ children's books for ages 5-10",
    category: "Books",
    location: "Public Library",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=500",
    status: "available",
    donorId: "1",
    createdAt: "2023-11-22T13:20:00Z",
  },
  {
    id: "6",
    name: "Stuffed Animals",
    description: "Gently used stuffed animals, freshly cleaned",
    category: "Toys",
    location: "Children's Center",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=500",
    status: "available",
    donorId: "1",
    createdAt: "2023-11-21T10:30:00Z",
  },
];
