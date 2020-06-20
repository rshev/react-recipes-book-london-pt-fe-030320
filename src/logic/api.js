const API = "http://localhost:3100";

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

export default { getRecipes, postOrder, postCustomer };
