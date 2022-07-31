// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  //   payload = data;
  const { payload, type } = action;

  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        popular: [...state.popular, ...payload],
      };
    case "ANOTHER_PAGE":
      return {
        ...state,
        page: payload,
      };
    case "GET_TOKEN":
      return {
        ...state,
        token: payload,
      };
    case "SELECT_MOVIE":
      return {
        ...state,
        movieSelected: payload,
      };
    default:
      return state;
  }
};
