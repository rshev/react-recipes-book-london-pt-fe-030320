const API = "https://react-recipes-book-london-pt-fe-030320.glitch.me/";

const getRecipes = async () => {
  const response = await fetch(`${API}/recipes`);
  const json = await response.json();
  return json;
};

const postCustomer = async (body) => {
  const response = await fetch(`${API}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

const postOrder = async (body) => {
  const response = await fetch(`${API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

const getCustomers = async () => {
  const response = await fetch(`${API}/customers`);
  const json = await response.json();
  return json;
};

export default { getRecipes, postOrder, postCustomer, getCustomers };
