import { TYPE_KEY } from "../types";

export default (state, action) => {
  switch (action.type) {
    case TYPE_KEY:
      return {
        ...state,
      };
    default:
      return state;
  }
};
