import { Button, Divider } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { UserData } from "../../../../utils/interfaces/userDataInterfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

interface CardButtonsProps {
  id: number;
  usersList: UserData[];
  setUsersList: React.Dispatch<React.SetStateAction<UserData[]>>;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardButtons = ({
  id,
  usersList,
  setUsersList,
  setEditable,
  editable,
}: CardButtonsProps) => {
  const [likeIcon, setLikeIcon] = useState<boolean>(false);

  const deleteUser = (id: number) => {
    const users = usersList.filter((user) => user.id !== id);
    setUsersList(users);
  };

  const editUser = (id: number) => {
    setEditable(!editable);
  };

  const likeUser = () => {
    setLikeIcon(!likeIcon);
  };

  return (
    <>
      <Button size="small" onClick={likeUser}>
        {likeIcon ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
        )}
      </Button>
      <Divider orientation="vertical" sx={{ height: 25 }} />
      <Button size="small" onClick={() => editUser(id)}>
        {editable ? (
          <p>Done</p>
        ) : (
          <BorderColorOutlinedIcon sx={{ color: "grey" }} />
        )}
      </Button>
      <Divider orientation="vertical" sx={{ height: 25 }} />
      <Button size="small" onClick={() => deleteUser(id)}>
        <DeleteIcon sx={{ color: "grey" }} />
      </Button>
    </>
  );
};

export default CardButtons;
