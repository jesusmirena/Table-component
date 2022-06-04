import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const tableFormated = usersData?.map((user) => {
    return {
      ["Fist Name"]: user.first_name,
      ["Last Name"]: user.last_name,
      ["Username"]: user.username,
      ["Email"]: user.email,

      ["Gender"]: user.gender,
      ["Phone Number"]: user.phone_number,
      ["Date Of Birth"]: user.date_of_birth,
    };
  });

  return (
    <div className="App">
      <h1>TABLA</h1>
      {!isLoading ? (
        <>
          <Pagination />
          <Table
            tableHead={
              tableFormated[0] &&
              Object.keys(tableFormated[0]).map((key) => key)
            }
            tableBody={tableFormated}
          />
          <Pagination />
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default App;
