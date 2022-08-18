export const useGetMeals = async ({ name = "beef" }) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  const { meals } = await response.json();
  return meals;
};
