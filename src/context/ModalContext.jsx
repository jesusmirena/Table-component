import React, { useState } from "react";

const Context = React.createContext({});

export function ModalContextProvider({ children }) {
  const [isModalHidden, setIsModalHidden] = useState(false);
  const [userForm, setUserForm] = useState({
    ["first_name"]: "",
    ["last_name"]: "",
    ["username"]: "",
    ["email"]: "",
    ["gender"]: "",
    ["phone_number"]: "",
    ["date_of_birth"]: "",
  });

  return (
    <>
      <Context.Provider
        value={{
          userForm,
          setUserForm,
          isModalHidden,
          setIsModalHidden,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export default Context;
