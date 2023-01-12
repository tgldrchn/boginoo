import { instance } from "../../App";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const SignUpBody = () => {
  const usernameValue = useRef();
  const passwordValue = useRef();
  const passwordReValue = useRef();
  const [jump, setJump] = useState("/signup");

  const createUser = async () => {
    if (passwordReValue.current.value === passwordValue.current.value) {
      try {
        await instance.post("/boginoo", {
          username: usernameValue.current.value,
          password: passwordValue.current.value,
        });
        toast("амжилттай бүртгэгдлээ");
        setJump(`/login`);
      } catch (error) {
        toast(error.response.data.data);
      }
    } else {
      toast("Нууц үг таарсангүй");
    }
  };

  return (
    <div className="login-body">
      <div className="login-title">Бүртгүүлэх</div>
      <div className="email-container">
        <div className="email">Нэвтрэх нэр</div>
        <input
          ref={usernameValue}
          type="text"
          className="email-input"
          placeholder="нэвтрэх нэрээ оруулна уу"
        />
      </div>
      <div className="email-container">
        <div className="email">Нууц үг</div>
        <input
          ref={passwordValue}
          type="password"
          className="email-input"
          placeholder="нууц үгээ оруулна уу"
        />
      </div>
      <div className="email-container">
        <div className="email">Нууц үгээ давтана уу?</div>
        <input
          ref={passwordReValue}
          type="password"
          className="email-input"
          placeholder="нууц үгээ давтан оруулна уу"
        />
      </div>
      <Link to={jump}>
        <button className="login-signup" onClick={createUser}>
          Бүртгүүлэх
        </button>
      </Link>
      <ToastContainer />
    </div>
  );
};
export default SignUpBody;
