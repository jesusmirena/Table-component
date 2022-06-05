import React, { useContext } from "react";
import Context from "../context/ModalContext";

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

    setUsersData(updatedUsers);
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

  return (
    <>
      {!isModalHidden ? (
        <div>
          <div>
            <button onClick={() => closeModal()}>X</button>
            <button onClick={() => setIsModalHidden(true)}>Hide form</button>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="first_name">First name</label>
            <input
              name="first_name"
              value={userForm.first_name}
              onChange={(e) => handleChange(e)}
              type="text"
            />

            <label htmlFor="last_name">Last name</label>
            <input
              onChange={(e) => handleChange(e)}
              name="last_name"
              value={userForm.last_name}
              type="text"
            />

            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => handleChange(e)}
              value={userForm.username}
              name="username"
              type="text"
            />

            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => handleChange(e)}
              value={userForm.email}
              name="email"
              type="text"
            />

            <label htmlFor="gender">Gender</label>
            <input
              onChange={(e) => handleChange(e)}
              value={userForm.gender}
              name="gender"
              type="text"
            />

            <label htmlFor="phone_number">Phone number</label>
            <input
              onChange={(e) => handleChange(e)}
              value={userForm.phone_number}
              name="phone_number"
              type="text"
            />

            <label htmlFor="date_of_birth">Date of birth</label>
            <input
              onChange={(e) => handleChange(e)}
              value={userForm.date_of_birth}
              name="date_of_birth"
              type="text"
            />
            <input type="submit" value="Save changes" />
          </form>
        </div>
      ) : (
        <button onClick={() => setIsModalHidden(false)}>HIDDEN</button>
      )}
    </>
  );
};

export default ModalForm;
