import { instance } from "../../App";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetBody = () => {
  const usernameRef = useRef();
  const forget = async () => {
    try {
      const res = await instance.post("/forget", {
        username: usernameRef.current.value,
      });
      toast("Таны нууц үг: " + res.data.data);
    } catch (error) {
      toast("Ийм хэрэглэгч байхгүй байна");
    }
  };
  return (
    <div className="loginBody">
      <div className="loginTitle">Нууц үг сэргээх</div>
      <div className="miniTitle">
        Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
      </div>
      <div className="emailContainer forgot">
        <div className="email">Нэр</div>
        <input
          type="email"
          className="emailInput"
          placeholder="нэвтрэх нэрээ оруулна уу"
          ref={usernameRef}
        />
      </div>
      <button className="loginLogin forgetLogin" onClick={forget}>
        Илгээх
      </button>
      <ToastContainer />
    </div>
  );
};
export default ForgetBody;
