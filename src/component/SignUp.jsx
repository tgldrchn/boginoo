import Footer from "./home-components/Footer";
import Logo from "./home-components/Logo";
import LoginHeader from "./login-components/LoginHeader";
import SignUpBody from "./signup-components/SignUpBody";

const SignUp = () => {
  return (
    <div className="signup">
      <LoginHeader />
      <Logo />
      <SignUpBody />
      <Footer />
    </div>
  );
};
export default SignUp;
