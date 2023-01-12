import { useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../App";
import Body from "../home-components/Body";

const HeaderLogged = ({ user }) => {
  const [historyData, setHistoryData] = useState([]);
  const history = async () => {
    const res = await instance.get("urls");
    setHistoryData(res.data.data);
    return <Body history={historyData} />;
  };
  return (
    <div className="header">
      <div className="header-title">ХЭРХЭН АЖИЛЛАХ ВЭ?</div>
      <Link to="/login" className="header-logged-container">
        <div className="header-logged">{user.username}</div>
      </Link>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
          className="icon-icon"
          onClick={history}
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
};
export default HeaderLogged;
