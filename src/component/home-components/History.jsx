import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const History = ({ historyList }) => {
  const copy = async () => {
    await navigator.clipboard.writeText(
      `http://localhost:3000/${historyList.shortLink}`
    );
    toast("Амжилттай хуулагдлаа");
  };
  return (
    <div className="historyUrls">
      <div className="historyUrl">
        <div className="holboos">Өгөгдсөн холбоос: </div>
        <div className="link">{historyList.url}</div>
      </div>
      <div className="historyShortlink">
        <div className="holboos">Богино холбоос: </div>{" "}
        <div className="copyContainerTwo">
          {" "}
          <a className="link" href={historyList.url}>
            http://localhost:3000/{historyList.shortLink}
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
export default History;
