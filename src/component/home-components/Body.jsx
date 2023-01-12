import { useState } from "react";
import { useRef } from "react";
import { instance } from "../../App";
import Links from "./Link";
import Logo from "./Logo";

const Body = ({ history }) => {
  const linkValue = useRef();
  const [data, setData] = useState();
  const shorten = async () => {
    const res = await instance.post("/urls", {
      url: linkValue.current.value,
    });
    setData(res.data.data);
  };
  console.log(history);

  return (
    <div className="home-body-container">
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
        <div className="history">
          {history &&
            history.map((history) => {
              return (
                <div className="history-urls">
                  <div className="history-url">
                    <div className="holboos">Өгөгдсөн холбоос: </div>
                    <div className="link">{history.url}</div>
                  </div>
                  <div className="history-shortlink">
                    <div className="holboos">Богино холбоос: </div>{" "}
                    <a className="link" href={history.url}>
                      http://localhost:7000/{history.shortLink}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Body;
