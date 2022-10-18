// import { json } from "express";
import { BASE_URL } from "./category";

export const registerUser = async (body) => {
  const options = {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const request = await fetch(`${BASE_URL}/api/user/auth/register`, options);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};

export const loginUser = async (body) => {
  const options = {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const request = await fetch(`${BASE_URL}/api/user/auth/login`, options);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};
