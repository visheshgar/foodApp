async function getRecipes (query ) {
  const APP_ID = "acc32f46";
  const APP_KEY = "0bf1ae06ab6592fc7079c8461e978c5b";

  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  console.log(data.hits);
  return data;
}

export default getRecipes;
