import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginBody = () => {
  const nameValue = useRef();
  const passValue = useRef();
  const [data, setData] = useState([]);
  const [jump, setJump] = useState("/login");
  const getData = async () => {
    const res = await instance.get("/boginoo");
    setData(res.data.data);
  };
  const login = () => {
    data.map((user, i) => {
      if (
        user.username === nameValue.current.value &&
        user.password === passValue.current.value
      ) {
        setJump(`/${user._id}`);
        toast("amjilttai nevterlee");
      }
      return i;
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
          type="email"
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
      <Link to={jump}>
        <button className="login-login" onClick={login}>
          Нэвтрэх
        </button>
      </Link>
      <Link className="new-user" to="/signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </Link>
      <ToastContainer />
    </div>
  );
};
export default LoginBody;
