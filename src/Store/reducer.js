const GET_COVID_DATA = "GET_COVID_DATA";

const initialstate = {
  covidfData: []
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return {
        ...state,
        covidfData: action.payload
      };
    default: {
      return state;
    }
  }
};

export default reducer;
