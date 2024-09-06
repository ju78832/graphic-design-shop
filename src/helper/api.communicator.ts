import axios from "axios";

export const signInUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("/api/user/login", { email, password });
    if (res.status !== 200) {
      console.log("Unable to sign-in");
    }
    const data = await res.data;
    console.log("sign-in successful");
    return data;
  } catch (error) {
    throw new Error("Unable to login");
  }
};

export const signUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await axios.post("/api/user/signup", { name, email, password });
    if (res.status !== 200) {
      console.log("Unable to sign up");
    }
    const data = await res.data;
    console.log("sign-up successfull");
    return data;
  } catch (error) {
    throw new Error("Unable to signup");
  }
};
export const checkAuthStatus = async () => {
  const res = await axios.get("/api/user/check-auth");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  try {
    const res = await axios.get("/api/user/logout");
    if (res.status !== 200) {
      console.log("Not able to logout");
    }
    console.log("logout Successfully");
  } catch (error) {
    throw new Error("Not able to logout");
  }
};
