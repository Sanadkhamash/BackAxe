import axios from "axios";

export const getIfUserCanLogIn = async (data, setToken) => {
  console.log("dakhla;");
  JSON.stringify(data);
  axios
    .post("http://127.0.0.1:8000/api/token/", data)
    .then((res) => {
      setToken(res);
    })
    .catch((err) => {
      setToken("Username or Password Error");
      console.log(err);
    });
};

export const RegisterUser = (data, setToken) => {
  axios
    .post("http://127.0.0.1:8000/users/reg/", data, {
      headers: {
        Authorization: localStorage.getItem("access_token")
          ? "JWT " + localStorage.getItem("access_token")
          : null,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    .then((res) => console.log(res));
};
