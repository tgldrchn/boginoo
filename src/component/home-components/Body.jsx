import { useState } from "react";
import { useRef } from "react";
import { instance } from "../../App";
import Links from "./Link";
import Logo from "./Logo";

const Body = () => {
  const linkValue = useRef();
  const [data, setData] = useState();
  const shorten = async () => {
    const res = await instance.post("/", {
      url: linkValue.current.value,
    });
    setData(res.data.data);
  };

  return (
    <div className="home-body">
      <Logo />
      <div className="body-input-container">
        <input
          ref={linkValue}
          type="text"
          className="body-input"
          placeholder="https://www.web-huudas.mn"
        />
        <button onClick={shorten} className="body-button">
          БОГИНОСГОХ
        </button>
        {data && <Links link={data} />}
      </div>
    </div>
  );
};
export default Body;
