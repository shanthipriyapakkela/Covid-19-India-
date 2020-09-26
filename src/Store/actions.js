import axios from "axios";

const GET_COVID_DATA = "GET_COVID_DATA";

export const getcoviddata = (data) => {
  return {
    type: GET_COVID_DATA,
    payload: data
  };
};

export const getdata = () => {
  return (dispatch) => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        dispatch(getcoviddata(response.data));
      });
  };
};
