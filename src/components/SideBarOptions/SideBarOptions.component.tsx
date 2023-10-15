import React from "react";

interface SideBarOptionsProps {
  handleChange: () => void;
  value: string;
  title: string | React.ReactElement;
  name: string;
  checked: boolean;
}

const SideBarOptions = ({
  handleChange,
  value,
  title,
  name,
  checked,
}: SideBarOptionsProps) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        className="input-checkbox"
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default SideBarOptions;
