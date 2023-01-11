const LoginBody = () => {
  return (
    <div className="login-body">
      <div className="login-title">НЭВТРЭХ</div>
      <div className="email-container">
        <div className="email">Цахим хаяг</div>
        <input
          type="email"
          className="email-input"
          placeholder="name@mail.domain"
        />
      </div>
      <div className="email-container">
        <div className="email">Нууц үг</div>
        <input
          type="email"
          className="email-input"
          placeholder="name@mail.domain"
        />
      </div>
    </div>
  );
};
export default LoginBody;
