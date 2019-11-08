import {LOGIN} from "../types/login";

export default (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return [];

    default:
      return state;
  }
};