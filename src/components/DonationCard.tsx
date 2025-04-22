
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DonationItem } from "@/lib/types";

interface DonationCardProps {
  item: DonationItem;
  onRequest?: () => void;
  onMarkAsPicked?: () => void;
  showActions?: boolean;
  userRole?: string;
}

export function DonationCard({ 
  item, 
  onRequest, 
  onMarkAsPicked, 
  showActions = true,
  userRole 
}: DonationCardProps) {
  const isAvailable = item.status === "available";
  
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={isAvailable ? "default" : "secondary"} className={isAvailable ? "bg-giving-500" : "bg-gray-400"}>
            {isAvailable ? "Available" : "Picked"}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{item.name}</CardTitle>
          <span className="text-sm text-caring-600 font-medium">{item.category}</span>
        </div>
        <CardDescription className="text-xs text-gray-500">
          {new Date(item.createdAt).toLocaleDateString()} • {item.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-gray-700 line-clamp-3">{item.description}</p>
      </CardContent>
      {showActions && isAvailable && (
        <CardFooter className="pt-2">
          {userRole === "recipient" && (
            <Button 
              onClick={onRequest} 
              className="w-full bg-caring-600 hover:bg-caring-700"
            >
              Request Item
            </Button>
          )}
          {userRole === "agent" && (
            <Button 
              onClick={onMarkAsPicked} 
              className="w-full bg-giving-600 hover:bg-giving-700"
            >
              Mark as Picked
            </Button>
          )}
          {!userRole && (
            <Button 
              onClick={onRequest} 
              className="w-full bg-caring-600 hover:bg-caring-700"
            >
              Request Item
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
