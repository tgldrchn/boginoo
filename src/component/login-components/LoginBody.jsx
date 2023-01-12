import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LoginBody = () => {
  const nameValue = useRef();
  const passValue = useRef();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await instance.get("/boginoo", {
        username: nameValue.current.value,
        password: passValue.current.value,
      });
      console.log(res.data.data);
      navigate(`/home/${res.data.data._id}`);
    } catch (error) {
      toast(error.data.data);
    }
  };

  return (
    <div className="login-body">
      <div className="login-title">Нэвтрэх</div>
      <div className="email-container">
        <div className="email">Нэвтрэх нэр</div>
        <input
          ref={nameValue}
          type="email"
          className="email-input"
          placeholder="нэвтрэх нэрээ оруулна уу"
        />
      </div>
      <div className="email-container">
        <div className="email">Нууц үг</div>
        <input
          ref={passValue}
          type="password"
          className="email-input"
          placeholder="нууц үгээ оруулна уу"
        />
      </div>
      <div className="forget-pass">
        <div className="remember-me">
          <input type="checkbox" className="remember" />
          <div className="remember-text">Намайг сана </div>
        </div>
        <div className="forget">Нууц үгээ мартсан</div>
      </div>
      <button className="login-login" onClick={getData}>
        Нэвтрэх
      </button>
      <Link className="new-user" to="/signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </Link>
      <ToastContainer />
    </div>
  );
};
export default LoginBody;
