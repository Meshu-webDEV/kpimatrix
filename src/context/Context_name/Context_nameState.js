// Context
import Context_nameContext from "./Context_nameContext";
import Context_nameReducer from "./Context_nameReducer";
import { TYPE_KEY } from "../types";

// Utils
import { backendAPI } from "../../lib/backend";

const Context_nameState = (props) => {
  const initialState = {
    state: null,
  };

  const [state, dispatch] = useReducer(Context_nameReducer, initialState);

  return (
    <Context_nameContext.Provider
      value={{
        state: state.state,
      }}
    >
      {props.children}
    </Context_nameContext.Provider>
  );
};

export default Context_nameState;
