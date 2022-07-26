// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  //   payload = data;
  const { payload, type } = action;

  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        popular: payload,
      };
    default:
      return state;
  }
};
