const API = "http://localhost:3100";

const getRecipes = async () => {
  const response = await fetch(`${API}/recipes`);
  const json = await response.json();
  return json;
};

const postBasket = async (body) => {
  const response = await fetch(`${API}/basket`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return response;
};

export default { getRecipes, postBasket };
