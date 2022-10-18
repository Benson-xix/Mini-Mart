import { BASE_URL } from "./category";

export const addItemToCart = async (body) => {
  const token = JSON.parse(localStorage.getItem("AUTH"))?.token;

  if (token) {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
    const request = await fetch(`${BASE_URL}/api/cart/add`, options);
    const response = await request.json();

    if ("error" in response) {
      return {
        error: response.error,
      };
    }
    return response;
  } else {
    return { error: "please login to continue" };
  }
};

export const getUserCartItem = async () => {
  const id = JSON.parse(localStorage.getItem("AUTH"))?.id;
  if (id) {
    const request = await fetch(`${BASE_URL}/api/cart/${id}`);
    const response = await request.json();

    if ("error" in response) {
      return {
        error: response.error,
      };
    }
    return response;
  } else {
    return { error: "please login to continue" };
  }
};

export const deleteCartItem = async (id) => {
  const token = JSON.parse(localStorage.getItem("AUTH"))?.token;

  if (token) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const request = await fetch(`${BASE_URL}/api/cart/${id}`, options);
      const response = await request.json();

      if (response) {
        if ("error" in response) {
          return {
            error: response.error,
          };
        }
      }
      return response;
    } catch (err) {
      return { error: err.message };
    }
  } else {
    // return {error: "please login to continue"}
  }
};

export const decreamentCartItem = async (id) => {
  const token = JSON.parse(localStorage.getItem("AUTH"))?.token;

  if (token) {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const request = await fetch(`${BASE_URL}/api/cart/${id}`, options);
    const response = await request.json();

    if ("error" in response) {
      return {
        error: response.error,
      };
    }
    return response;
  } else {
    return { error: "please login to continue" };
  }
};

export const callCheckOut = async (amount) => {
  const token = JSON.parse(localStorage.getItem("AUTH"))?.token;

  if (token) {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: amount * 100 }),
    };
    const request = await fetch(`${BASE_URL}/api/payment`, options);
    const response = await request.json();

    if ("error" in response) {
      return {
        error: response.error,
      };
    }
    return response;
    console.log(response)
  } else {
    return { error: "please login to continue" };
  }
};
