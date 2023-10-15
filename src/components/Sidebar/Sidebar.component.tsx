import React from "react";
import CategoryComponent from "./Category/Category.component";
import "./sidebar.scss";
import PriceComponent from "./Price/Price.component";
import RatingsComponent from "./Ratings/Ratings.component";

export interface SidebarProps {
  filters: {
    selectedCategory: string;
    priceRange: string;
    rating: string;
  };
  handleChange: (name: string, value: string) => void;
}

const Sidebar = ({ filters, handleChange }: SidebarProps) => {
  return (
    <div className="sidebar-container ">
      <CategoryComponent
        catergoryFilter={filters.selectedCategory}
        handleChange={handleChange}
      />
      <PriceComponent
        priceFilter={filters.priceRange}
        handleChange={handleChange}
      />
      <RatingsComponent
        ratingFilter={filters.rating}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Sidebar;
