import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const Links = ({ link }) => {
  const copy = async () => {
    await navigator.clipboard.writeText(
      `http://localhost:3000/${link.shortLink}`
    );
    toast("Амжилттай хуулагдлаа");
  };
  return (
    <div className="holboosnuud">
      <div className="ugugdsun">
        <div className="holboos">Өгөгдсөн холбоос:</div>
        <div className="link">{link.url}</div>
      </div>
      <div className="bogino">
        <div className="holboos">Богино холбоос:</div>
        <div className="copyContainer">
          <a className="link" href={link.url}>
            http://localhost:3000/{link.shortLink}
          </a>
          <div className="copy" onClick={copy}>
            Хуулж авах
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Links;
