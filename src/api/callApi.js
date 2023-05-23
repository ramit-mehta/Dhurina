import axios from "axios";
const URL = process.env.REACT_APP_API_URL_Live;

const makeApiCall = async (data, type, url, callback) => {
  try {
    const apiUrl = URL + url;
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);

    if (type === "get") {
      const response = await axios.get(apiUrl, {
        headers: { Authorization: AuthStr },
      });
      callback(response);
    } else {
      const response = await axios.post(apiUrl, data, {
        headers: { Authorization: AuthStr },
      });
      let responseData = response;
      responseData.payload = data;
      callback(responseData);
    }
  } catch (error) {
    console.log(error);
  }
};

export default makeApiCall;
