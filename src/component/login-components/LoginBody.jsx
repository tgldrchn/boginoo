import { Link } from "react-router-dom";
import { useRef } from "react";
import { instance } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";

const LoginBody = () => {
  const nameValue = useRef();
  const passValue = useRef();
  const navigate = useNavigate();
  const [toggled, setToggled] = useState(false);
  const [forget, setForget] = useState(false);
  const [savedUser, setSavedUser] = useState([]);

  const toggle = () => {
    setToggled(!toggled);
  };

  const toggleForget = () => {
    setForget(!forget);
  };

  const getData = async () => {
    try {
      const res = await instance.post("/login", {
        username: nameValue.current.value,
        password: passValue.current.value,
      });
      navigate(`/home/${res.data.data._id}`);
      if (toggled) {
        localStorage.setItem("save", JSON.stringify(res.data.data));
      }
    } catch (error) {
      toast(error);
    }
  };

  if (forget) {
    localStorage.clear();
  }

  useEffect(() => {
    setSavedUser(JSON.parse(localStorage.getItem("save")));
  }, []);

  return (
    <div className="loginBody">
      <div className="loginTitle">Нэвтрэх</div>
      <div className="emailContainer">
        <div className="email">Нэвтрэх нэр</div>
        <input
          ref={nameValue}
          type="email"
          className="emailInput"
          placeholder="нэвтрэх нэрээ оруулна уу"
          defaultValue={(savedUser && savedUser.username) || ""}
        />
      </div>
      <div className="emailContainer">
        <div className="email">Нууц үг</div>
        <input
          ref={passValue}
          type="password"
          className="emailInput"
          placeholder="нууц үгээ оруулна уу"
          defaultValue={(savedUser && savedUser.password) || ""}
        />
      </div>
      <div className="forgetPass">
        <div className="rememberMe">
          <input type="checkbox" className="remember" onChange={toggle} />
          <div className="rememberText">Намайг сана </div>
        </div>
        <div className="rememberMe">
          <input type="checkbox" className="remember" onChange={toggleForget} />
          <div className="rememberText">Мартах</div>
        </div>
        <Link className="forget" to="/forget">
          Нууц үгээ мартсан
        </Link>
      </div>
      <button className="loginLogin" onClick={getData}>
        Нэвтрэх
      </button>
      <Link className="newUser" to="/signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </Link>
      <ToastContainer />
    </div>
  );
};
export default LoginBody;
