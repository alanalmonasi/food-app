import { Chip, Stack, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetMeals } from "../hooks/useGetMeals";
import { MealCard } from "./MealCard";
import { SelectKitchen } from "./options/SelectKitchen";
import { SelectTime } from "./options/SelectTime";

export const MainMenu = () => {
  const [message, setMessage] = useState("");
  const [mealName, setMealName] = useState("beef");
  const [allMeals, setAllMeals] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMessage("Agregar mas platillos");
  };

  const getMeals = async (name = mealName) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    const data = await res.json();
    const { meals } = data;
    setAllMeals(meals);
  };

  const handleSelectKitchen = (e) => {
    // console.log("hola: ", e);
    setMealName(e);
    getMeals(e);
  };

  setTimeout(() => {
    setMessage("");
  }, 2500);

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <div className="top-bar">
        <Stack direction="row" spacing={15}>
          <SelectTime />
          {/* Name comes from here and pass into getMeals */}
          <SelectKitchen onSelectKitchen={handleSelectKitchen} />
          <Chip
            label="Platillos"
            variant="filled"
            color="warning"
            avatar={
              <Avatar alt="add" src="src/icons/add.png" className="icon" />
            }
            onClick={handleClick}
          />
        </Stack>
      </div>
      <div className="add-dishes">{message}</div>
      <br />
      <div
        className="meal-cards"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {allMeals.length !== 0 &&
          allMeals.map((dish) => (
            <MealCard
              key={dish.idMeal}
              name={dish.strMeal}
              id={dish.idMeal}
              image={dish.strMealThumb}
              price={dish.idMeal}
            />
          ))}
      </div>
    </>
  );
};
