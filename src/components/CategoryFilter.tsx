
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryName: string | null) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        className={selectedCategory === null ? "bg-giving-600" : ""}
        onClick={() => onSelectCategory(null)}
      >
        All Categories
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.name ? "default" : "outline"}
          className={selectedCategory === category.name ? "bg-giving-600" : ""}
          onClick={() => onSelectCategory(category.name)}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
}
