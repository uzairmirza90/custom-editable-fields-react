import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsersListService } from "../../../../services/userDataService";
import { UserData } from "../../../../utils/interfaces/userDataInterfaces";
import "../searchUser/searchUser.scss";

interface SearchUserProps {
  usersList: UserData[];
  setUsersList: React.Dispatch<React.SetStateAction<UserData[]>>;
}

const SearchUser = ({ usersList, setUsersList }: SearchUserProps) => {
  const [search, setSearch] = useState<string>("");

  const checkQuery = (query: string) => {
    return query.toLowerCase().includes(search.toLowerCase());
  };

  useEffect(() => {
    if (search !== "") {
      let searchList = usersList.filter((item) => {
        if (
          checkQuery(item.name) ||
          checkQuery(item.email) ||
          checkQuery(item.website) ||
          checkQuery(item.phone)
        ) {
          return usersList;
        }
      });
      setUsersList(searchList);
    } else {
      getUsersListService().then((users) => setUsersList(users));
    }
  }, [search]);

  return (
    <Container maxWidth={"xl"} className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search user here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <Button className="search-button" variant="contained">
        Search
      </Button>
    </Container>
  );
};

export default SearchUser;
