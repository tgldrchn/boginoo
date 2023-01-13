import ForgetBody from "./forget-components/ForgetBody";
import Footer from "./home-components/Footer";
import Logo from "./home-components/Logo";
import LoginHeader from "./login-components/LoginHeader";

const Forget = () => {
  return (
    <div className="login">
      <LoginHeader />
      <Logo />
      <ForgetBody />
      <Footer />
    </div>
  );
};
export default Forget;
