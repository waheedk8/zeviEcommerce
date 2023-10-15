import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import SideBarOptions from "../../SideBarOptions/SideBarOptions.component";
import "../sidebar.scss";

interface CategoryComponentProps {
  catergoryFilter: string;
  handleChange: (name: string, value: string) => void;
}

function CategoryComponent({
  catergoryFilter,
  handleChange,
}: CategoryComponentProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category: string) => {
    handleChange("selectedCategory", category);
  };

  return (
    <div className="sidebar-options-container">
      <h2 className="sidebar-title">
        Brand
        <span style={{ marginLeft: "70px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>
      <div>
        <SideBarOptions
          value="All"
          title="All"
          name="category"
          handleChange={() => handleCategoryChange("All")}
          checked={catergoryFilter === "All"}
        />

        <SideBarOptions
          handleChange={() => handleCategoryChange("men's clothing")}
          value="men's clothing"
          title="Men"
          name="category"
          checked={catergoryFilter === "men's clothing"}
        />

        {showDropdown && (
          <>
            <SideBarOptions
              handleChange={() => handleCategoryChange("women's clothing")}
              value="women's clothing"
              title="Women"
              name="category"
              checked={catergoryFilter === "women's clothing"}
            />
            <SideBarOptions
              handleChange={() => handleCategoryChange("jewelery")}
              value="jewelery"
              title="Jewelry"
              name="category"
              checked={catergoryFilter === "jewelery"}
            />
            <SideBarOptions
              handleChange={() => handleCategoryChange("electronics")}
              value="electronics"
              title="Electronics"
              name="category"
              checked={catergoryFilter === "electronics"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CategoryComponent;
