import {createStore} from "redux";
import rootReducer from "./reducers";

const createStorage = () => {
  return createStore(rootReducer);
};

export default createStorage;