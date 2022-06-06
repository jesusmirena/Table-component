import axios from "axios";
import { useEffect, useState } from "react";
import ModalForm from "./components/ModalForm";
import Pagination from "./components/Pagination";
import Container from "./components/styledComponents/Container.styled";
import Table from "./components/Table";

import { useModal } from "./hooks/useModal";

function App() {
  const [usersData, setUsersData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const { modal, openModal, closeModal } = useModal();

  const getUsers = async () => {
    const response = await axios.get(
      "https://random-data-api.com/api/users/random_user?size=30"
    );
    setUsersData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData?.slice(indexOfFirstUser, indexOfLastUser);

  const tableFormated = currentUsers?.map((user) => {
    return {
      ["id"]: user.id,
      ["first_name"]: user.first_name,
      ["last_name"]: user.last_name,
      ["username"]: user.username,
      ["email"]: user.email,
      ["gender"]: user.gender,
      ["phone_number"]: user.phone_number,
      ["date_of_birth"]: user.date_of_birth,
    };
  });

  return (
    <Container general className="App">
      <h1>OnRoadTS Test</h1>

      {!isLoading ? (
        <>
          {modal && (
            <ModalForm
              closeModal={closeModal}
              usersData={usersData}
              setUsersData={setUsersData}
            />
          )}
          <Table
            tableHead={
              tableFormated[0] &&
              Object.keys(tableFormated[0]).map((key) => key)
            }
            tableBody={tableFormated}
            openModal={openModal}
            usersData={usersData}
            setUsersData={setUsersData}
          />
          <Pagination
            usersPerPage={usersPerPage}
            usersAmount={usersData.length}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </Container>
  );
}

export default App;
