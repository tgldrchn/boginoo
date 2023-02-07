import { useState } from "react";
import { useRef } from "react";
import { instance } from "../../App";
import History from "./History";
import Links from "./Link";
import Logo from "./Logo";
import { ToastContainer, toast } from "react-toastify";
import React from "react";

const Body = ({ historyValue }) => {
  const linkValue = useRef();
  const [data, setData] = useState();
  const shorten = async () => {
    try {
      const res = await instance.post("/urls", {
        url: linkValue.current.value,
        token: JSON.parse(localStorage.getItem("token")),
        user_id: JSON.parse(localStorage.getItem("user_id")),
      });
      setData(res.data.data);
    } catch (error) {
      toast("нэвтэрч орно уу");
    }
  };

  return (
    <div className="homeBodyContainer">
      <div className="homeBody">
        <Logo />
        <div className="bodyInputContainer">
          <input
            ref={linkValue}
            type="text"
            className="bodyInput"
            placeholder="https://www.web-huudas.mn"
          />
          <button onClick={shorten} className="bodyButton">
            БОГИНОСГОХ
          </button>
        </div>
        {data && <Links link={data} />}
        <div className="history">
          {this.props &&
            this.props.map((el) => {
              return <History historyList={el} />;
            })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Body;
