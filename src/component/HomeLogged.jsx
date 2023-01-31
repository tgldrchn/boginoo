import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import { Link } from "react-router-dom";
import Body from "./home-components/Body";
import Footer from "./home-components/Footer";

const HomeLogged = () => {
  const { userid } = useParams();
  const [historyData, setHistoryData] = useState([]);
  const [user, setData] = useState([]);

  const getLoggedData = async () => {
    const res = await instance.get(`/boginoo/${userid}`);
    setData(res.data.data);
  };

  useEffect(() => {
    getLoggedData();
  }, [userid]);

  const history = async () => {
    const res = await instance.get(`/history/${userid}?page=2&limit=2`);
    setHistoryData(res.data.data.data);
  };

  return (
    <div className="HomeLogged">
      {" "}
      <div className="header">
        <div className="headerTitle">ХЭРХЭН АЖИЛЛАХ ВЭ?</div>
        <Link to="/login" className="headerLoggedContainer">
          <div className="headerLogged">{user.username}</div>
        </Link>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="iconIcon"
            onClick={history}
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>{" "}
      <Body historyValue={historyData} />
      <Footer />
    </div>
  );
};
export default HomeLogged;
