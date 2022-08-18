import { Avatar, Chip, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useGetMeals } from "../../hooks/useGetMeals";

const CustomItem = ({ name, onSetCategory }) => (
  <MenuItem onClick={() => onSetCategory(name)}>{name}</MenuItem>
);

export const SelectKitchen = ({ onSelectKitchen }) => {
  const [kitchen, setKitchen] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [label, setLabel] = useState("Beef");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    getFetch();
  };

  const handleCategory = (name) => {
    setLabel(name);
    onSelectKitchen(name);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getFetch = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json();
    setKitchen(data.categories);
  };

  return (
    <div>
      <Chip
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        label={label}
        variant="filled"
        color="warning"
        avatar={
          <Avatar alt="clock" src="src/icons/restaurant.png" className="icon" />
        }
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Elige un servicio</MenuItem>
        {kitchen.map((k) => (
          <CustomItem
            key={k.idCategory}
            name={k.strCategory}
            onSetCategory={handleCategory}
          />
        ))}
      </Menu>
    </div>
  );
};
