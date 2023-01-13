import { useState } from "react";
import { useRef } from "react";
import { instance } from "../../App";
import History from "./History";
import Links from "./Link";
import Logo from "./Logo";

const Body = ({ historyValue }) => {
  const linkValue = useRef();
  const [data, setData] = useState();
  const shorten = async () => {
    const res = await instance.post("/urls", {
      url: linkValue.current.value,
    });
    setData(res.data.data);
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
          {historyValue &&
            historyValue.map((el) => {
              return <History historyList={el} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Body;
