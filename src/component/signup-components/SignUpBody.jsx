import { instance } from "../../App";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const SignUpBody = () => {
  const usernameValue = useRef();
  const passwordValue = useRef();
  const passwordReValue = useRef();
  const navigate = useNavigate();

  const createUser = async () => {
    if (passwordReValue.current.value === passwordValue.current.value) {
      try {
        await instance.post("/boginoo", {
          username: usernameValue.current.value,
          password: passwordValue.current.value,
        });
        toast("амжилттай бүртгэгдлээ");
        navigate(`/login`);
      } catch (error) {
        toast(error.response.data.data);
      }
    } else {
      toast("Нууц үг таарсангүй");
    }
  };

  return (
    <div className="loginBody">
      <div className="loginTitle">Бүртгүүлэх</div>
      <div className="emailContainer">
        <div className="email">Нэвтрэх нэр</div>
        <input
          ref={usernameValue}
          type="text"
          className="emailInput"
          placeholder="нэвтрэх нэрээ оруулна уу"
        />
      </div>
      <div className="emailContainer">
        <div className="email">Нууц үг</div>
        <input
          ref={passwordValue}
          type="password"
          className="emailInput"
          placeholder="нууц үгээ оруулна уу"
        />
      </div>
      <div className="emailContainer">
        <div className="email">Нууц үгээ давтана уу?</div>
        <input
          ref={passwordReValue}
          type="password"
          className="emailInput"
          placeholder="нууц үгээ давтан оруулна уу"
        />
      </div>
      <button className="loginSignup" onClick={createUser}>
        Бүртгүүлэх
      </button>
      <ToastContainer />
    </div>
  );
};
export default SignUpBody;
