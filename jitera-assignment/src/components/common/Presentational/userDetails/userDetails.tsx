import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useState } from "react";
import "../userDetails/userDetails.scss";

interface UserDetailsProps {
  email: string;
  phone: string;
  website: string;
  editable: boolean;
}

const UserDetails = ({ email, phone, website, editable }: UserDetailsProps) => {
  const [userEmail, setUserEmail] = useState<string>(email);
  const [userPhone, setUserPhone] = useState<string>(phone);
  const [userWebsite, setUserWebsite] = useState<string>(website);
  return (
    <>
      {editable ? (
        <>
          <input
            className="input"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          ></input>
          <input
            className="input"
            type="text"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          ></input>
          <input
            className="input"
            type="text"
            value={userWebsite}
            onChange={(e) => setUserWebsite(e.target.value)}
          ></input>
        </>
      ) : (
        <>
          <p className="text">
            <MailOutlineIcon sx={{ color: "grey" }} />
            {userEmail}
          </p>
          <p className="text">
            <PhoneEnabledOutlinedIcon sx={{ color: "grey" }} />
            {userPhone}
          </p>
          <p className="text">
            <LanguageOutlinedIcon sx={{ color: "grey" }} />
            {userWebsite}
          </p>
        </>
      )}
    </>
  );
};

export default UserDetails;
