import Footer from "./home-components/Footer";
import Logo from "./home-components/Logo";
import LoginBody from "./login-components/LoginBody";
import LoginHeader from "./login-components/LoginHeader";

const Login = () => {
  return (
    <div className="login">
      <LoginHeader />
      <Logo />
      <LoginBody />
      <Footer />
    </div>
  );
};
export default Login;
