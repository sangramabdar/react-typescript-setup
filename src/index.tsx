import ReactDOM from "react-dom";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useContext,
  FunctionComponent,
} from "react";

import "./index.css";

const initialValue = {
  value: 0,
};

const dataContext = React.createContext<{ value: number }>(null);

function reducer(state: any, action: any) {
  switch (action) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
  }
}

function App(props) {
  const ref = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {}, [state]);

  return (
    <dataContext.Provider value={state}>
      <>
        <h1 className={"div"}>{state.value}</h1>
        <button
          ref={ref}
          onClick={() => {
            dispatch("increment");
          }}
        >
          {props.children}
        </button>
      </>
    </dataContext.Provider>
  );
}

ReactDOM.render(
  <App children={"click here"} />,
  document.getElementById("root")
);
