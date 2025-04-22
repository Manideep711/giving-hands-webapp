
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockCategories } from "@/lib/mock-data";

interface DonationFormProps {
  onSubmit: (donationData: any) => void;
}

export function DonationForm({ onSubmit }: DonationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      status: "available",
      createdAt: new Date().toISOString(),
    });
    // Reset form
    setFormData({
      name: "",
      description: "",
      category: "",
      location: "",
      image: "",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-giving-700">Donate an Item</CardTitle>
        <CardDescription>
          Fill out the form below to donate an item. Someone in need will appreciate your generosity.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Item Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Winter Jacket"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the item's condition, size, and other relevant details"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <Select 
              onValueChange={handleSelectChange} 
              value={formData.category}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {mockCategories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Pickup Location
            </label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Downtown Community Center"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image" className="text-sm font-medium">
              Image URL
            </label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              type="url"
              required
            />
            <p className="text-xs text-gray-500">
              Please provide a clear image of the item. You can use services like Imgur to host your images.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-giving-600 hover:bg-giving-700">
            Submit Donation
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
