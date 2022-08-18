export const useGetMealData = async ({ id }) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { meals } = await response.json();
  const { strTags, strArea } = meals[0];
  return { strTags, strArea };
};
