import { useCallback, useContext, useState } from "react";
import Context from "../context/ModalContext";

export const useModal = (initialMode = false) => {
  const [modal, setModal] = useState(initialMode);

  const { setUserForm, setIsModalHidden } = useContext(Context);

  const openModal = useCallback(
    (user) => {
      setModal(true);
      if (user) {
        setIsModalHidden(false);
        setUserForm({
          ["id"]: user.id,
          ["first_name"]: user.first_name,
          ["last_name"]: user.last_name,
          ["username"]: user.username,
          ["email"]: user.email,
          ["gender"]: user.gender,
          ["phone_number"]: user.phone_number,
          ["date_of_birth"]: user.date_of_birth,
        });
      }
    },
    [setModal]
  );

  const closeModal = (isClosing) => {
    if (!isClosing) {
      const response = confirm("Do you want to discard your changes?");
      if (response) {
        setModal(false);
      }
    } else {
      setModal(false);
    }
  };

  return {
    modal,
    setModal,
    closeModal,
    openModal,
  };
};
