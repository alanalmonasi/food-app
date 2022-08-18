import { Avatar, Chip, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export const SelectTime = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [label, setLabel] = useState("11:00 am - 12:00 am");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTimeOne = () => {
    setLabel("11:00 am - 12:00 am");
    setAnchorEl(null);
  };

  const handleTimeTwo = () => {
    setLabel("1:00 pm - 2:00 pm");
    setAnchorEl(null);
  };

  const handleTimeThree = () => {
    setLabel("2:00 pm - 3:00 pm");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <Avatar alt="clock" src="src/icons/clock.png" className="icon" />
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
        <MenuItem>Selecciona un horario</MenuItem>
        <MenuItem onClick={handleTimeOne}>11:00 am - 12:00 am</MenuItem>
        <MenuItem onClick={handleTimeTwo}>1:00 pm - 2:00 pm</MenuItem>
        <MenuItem onClick={handleTimeThree}>2:00 pm - 3:00 pm</MenuItem>
      </Menu>
    </div>
  );
};
