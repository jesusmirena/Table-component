import React, { useContext, useEffect } from "react";
import Context from "../context/ModalContext";

import ModalWindow from "./styledComponents/ModalWindow.styled";
import Container from "./styledComponents/Container.styled";
import StyledButton from "./styledComponents/Button.styled";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";

const ModalForm = ({ closeModal, usersData, setUsersData }) => {
  const { userForm, setUserForm, isModalHidden, setIsModalHidden } =
    useContext(Context);

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

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    } else if (values.first_name.length > 15) {
      errors.first_name = "Must be 15 characters or less";
    }

    if (!values.last_name) {
      errors.last_name = "Required";
    } else if (values.last_name.length > 15) {
      errors.last_name = "Must be 15 characters or less";
    }

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 30) {
      errors.username = "Must be 30 characters or less";
    }
    if (!values.gender) {
      errors.gender = "Required";
    } else if (values.gender.length > 15) {
      errors.gender = "Must be 15 characters or less";
    }

    if (!values.phone_number) {
      errors.phone_number = "Required";
    } else if (values.phone_number.length > 20) {
      errors.phone_number = "Must be 20 characters or less";
    }
    if (!values.date_of_birth) {
      errors.date_of_birth = "Required";
    } else if (!/^\d{4}-\d{2}-\d{2}$/i.test(values.date_of_birth)) {
      errors.date_of_birth = "Invalid date";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      id: userForm.id,
      first_name: userForm.first_name,
      last_name: userForm.last_name,
      username: userForm.username,
      email: userForm.email,
      gender: userForm.gender,
      phone_number: userForm.phone_number,
      date_of_birth: userForm.date_of_birth,
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values) => {
      const updatedUsers = usersData.map((userState) =>
        userState.id === userForm.id ? values : userState
      );
      alert("The user has been edited successfully :)");
      setUsersData(updatedUsers);
      closeModal(true);
    },
  });
  return (
    <>
      {!isModalHidden ? (
        <ModalWindow isActive>
          <form onSubmit={formik.handleSubmit}>
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
                  id="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  type="text"
                />
              </div>
              {formik.errors.first_name ? (
                <div>{formik.errors.first_name}</div>
              ) : null}

              <div>
                <label htmlFor="last_name">Last name</label>
                <input
                  onChange={formik.handleChange}
                  name="last_name"
                  id="last_name"
                  value={formik.values.last_name}
                  type="text"
                />
              </div>
              {formik.errors.last_name ? (
                <div>{formik.errors.last_name}</div>
              ) : null}

              <div>
                <label htmlFor="username">Username</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  name="username"
                  id="username"
                  type="text"
                />
              </div>
              {formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}

              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  id="email"
                  type="text"
                />
              </div>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}

              <div>
                <label htmlFor="gender">Gender</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  name="gender"
                  id="gender"
                  type="text"
                />
              </div>
              {formik.errors.gender ? <div>{formik.errors.gender}</div> : null}

              <div>
                <label htmlFor="phone_number">Phone number</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.phone_number}
                  name="phone_number"
                  id="phone_number"
                  type="text"
                />
              </div>
              {formik.errors.phone_number ? (
                <div>{formik.errors.phone_number}</div>
              ) : null}

              <div>
                <label htmlFor="date_of_birth">Date of birth</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.date_of_birth}
                  name="date_of_birth"
                  id="date_of_birth"
                  type="text"
                />
              </div>
              {formik.errors.date_of_birth ? (
                <div>{formik.errors.date_of_birth}</div>
              ) : null}
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
