import React, { useState } from "react";

export const SignUpContext = React.createContext({
  title: "",
  setStateTitle: () => {},
});

export const SignUpContextProvider = (props) => {
  const [stateTitle, setStateTitle] = useState("asdsada");
  return (
    <SignUpContext.Provider value={{ title: stateTitle, setStateTitle }}>
      {props.children}
    </SignUpContext.Provider>
  );
};
export const SignUpContextConsumer = SignUpContext.Consumer;
