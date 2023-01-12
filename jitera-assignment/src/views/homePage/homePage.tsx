import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import UserCard from "../../components/common/Presentational/userCard/userCard";
import { getUsersListService } from "../../services/userDataService";
import { UserData } from "../../utils/interfaces/userDataInterfaces";
import "../homePage/homePage.scss";
import SearchUser from "../../components/common/Presentational/searchUser/searchUser";
import Sidebar from "../../components/common/Presentational/sidebar/sidebar";

const HomePage: React.FC = () => {
  const [usersList, setUsersList] = useState<UserData[]>([]);

  useEffect(() => {
    getUsersListService().then((users) => setUsersList(users));
  }, []);

  return (
    <>
      <div className="home">
        <div className="sidebar-container">
          <Sidebar users={usersList} />
        </div>
        <Container className="home-content">
          <div className="home-content-heading">
            <h1>All Users</h1>
          </div>
          <div className="line"></div>
          <SearchUser usersList={usersList} setUsersList={setUsersList} />
          <Container maxWidth={"xl"} className="home-page">
            {usersList.length ? (
              usersList.map(({ id, email, website, name, phone }) => (
                <UserCard
                  key={id}
                  id={id}
                  email={email}
                  website={website}
                  name={name}
                  phone={phone}
                  usersList={usersList}
                  setUsersList={setUsersList}
                />
              ))
            ) : (
              <p style={{ fontSize: "30px", marginTop: "180px" }}>No items</p>
            )}
          </Container>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
