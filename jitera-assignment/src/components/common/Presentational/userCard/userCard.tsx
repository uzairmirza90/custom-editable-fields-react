import { useState } from "react";
import { Box } from "@mui/material";
import { getUsersAvatars } from "../../../../services/userDataService";
import { UserData } from "../../../../utils/interfaces/userDataInterfaces";
import CardButtons from "../cardButtons/cardButtons";
import UserName from "../userName/userName";
import UserDetails from "../userDetails/userDetails";
import "../userCard/userCard.scss";

interface UserCardProps {
  id: number;
  email: string;
  website: string;
  name: string;
  phone: string;
  usersList: UserData[];
  setUsersList: React.Dispatch<React.SetStateAction<UserData[]>>;
}

const UserCard = ({
  id,
  email,
  website,
  name,
  phone,
  usersList,
  setUsersList,
}: UserCardProps) => {
  const [editable, setEditable] = useState<boolean>(false);
  return (
    <Box className="card">
      <Box className="card-image">
        <img src={getUsersAvatars(id)} className="image" />
      </Box>
      <Box className="card-data">
        <UserName name={name} editable={editable} />
        <UserDetails
          email={email}
          phone={phone}
          website={website}
          editable={editable}
        />
      </Box>
      <Box className="card-buttons">
        <CardButtons
          id={id}
          usersList={usersList}
          setUsersList={setUsersList}
          setEditable={setEditable}
          editable={editable}
        />
      </Box>
    </Box>
  );
};

export default UserCard;
