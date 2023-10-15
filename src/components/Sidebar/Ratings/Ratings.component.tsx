import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import SideBarOptions from "../../SideBarOptions/SideBarOptions.component";
import "../sidebar.scss";
import { AiFillStar } from "react-icons/ai";

interface RatingsComponentProps {
  ratingFilter: string;
  handleChange: (name: string, value: string) => void;
}

function RatingsComponent({
  ratingFilter,
  handleChange,
}: RatingsComponentProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStarRangeChange = (rating: string) => {
    handleChange("rating", rating);
  };

  return (
    <div className="sidebar-options-container">
      <h2 className="sidebar-title">
        Rating
        <span style={{ marginLeft: "70px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>
      <div>
        <SideBarOptions
          handleChange={() => handleStarRangeChange("5 star")}
          value="5 star"
          title={
            <>
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
            </>
          }
          name="rating"
          checked={ratingFilter === "5 star"}
        />

        <SideBarOptions
          handleChange={() => handleStarRangeChange("4 star")}
          value="4 star"
          title={
            <>
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
            </>
          }
          name="rating"
          checked={ratingFilter === "4 star"}
        />
        {showDropdown && (
          <>
            <SideBarOptions
              handleChange={() => handleStarRangeChange("3 star")}
              value="3 star"
              title={
                <>
                  <AiFillStar color="gold" />
                  <AiFillStar color="gold" />
                  <AiFillStar color="gold" />
                </>
              }
              name="rating"
              checked={ratingFilter === "3 star"}
            />
            <SideBarOptions
              handleChange={() => handleStarRangeChange("2 star")}
              value="2 star"
              title={
                <>
                  <AiFillStar color="gold" />
                  <AiFillStar color="gold" />
                </>
              }
              name="rating"
              checked={ratingFilter === "2 star"}
            />
            <SideBarOptions
              handleChange={() => handleStarRangeChange("1 star")}
              value="1 star"
              title={
                <>
                  <AiFillStar color="gold" />
                </>
              }
              name="rating"
              checked={ratingFilter === "1 star"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default RatingsComponent;
