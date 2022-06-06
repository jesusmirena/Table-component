import React, { useContext, useEffect } from "react";
import Context from "../context/ModalContext";

import ModalWindow from "./styledComponents/ModalWindow.styled";
import Container from "./styledComponents/Container.styled";
import StyledButton from "./styledComponents/Button.styled";
import { FiEdit } from "react-icons/fi";

const ModalForm = ({ closeModal, usersData, setUsersData }) => {
  const { userForm, setUserForm, isModalHidden, setIsModalHidden } =
    useContext(Context);

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUsers = usersData.map((userState) =>
      userState.id === userForm.id ? userForm : userState
    );
    alert("The user has been edited successfully :)");
    setUsersData(updatedUsers);
    closeModal(true);
  };

  useEffect(() => {
    return () => {
      setUserForm({
        ["first_name"]: "",
        ["last_name"]: "",
        ["username"]: "",
        ["email"]: "",
        ["gender"]: "",
        ["phone_number"]: "",
        ["date_of_birth"]: "",
      });
    };
  }, []);

  return (
    <>
      {!isModalHidden ? (
        <ModalWindow isActive>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Container buttons>
              <StyledButton red onClick={() => closeModal()}>
                X
              </StyledButton>
              <StyledButton blue onClick={() => setIsModalHidden(true)}>
                Hide form
              </StyledButton>
            </Container>
            <fieldset>
              <div>
                <label htmlFor="first_name">First name</label>
                <input
                  name="first_name"
                  value={userForm.first_name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="last_name">Last name</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="last_name"
                  value={userForm.last_name}
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="username">Username</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={userForm.username}
                  name="username"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={userForm.email}
                  name="email"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="gender">Gender</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={userForm.gender}
                  name="gender"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="phone_number">Phone number</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={userForm.phone_number}
                  name="phone_number"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="date_of_birth">Date of birth</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={userForm.date_of_birth}
                  name="date_of_birth"
                  type="text"
                />
              </div>
              <StyledButton blue type="submit">
                Save changes
              </StyledButton>
            </fieldset>
          </form>
        </ModalWindow>
      ) : (
        <ModalWindow isHidden>
          <i>
            <FiEdit size="3rem" onClick={() => setIsModalHidden(false)} />
          </i>
        </ModalWindow>
      )}
    </>
  );
};

export default ModalForm;
