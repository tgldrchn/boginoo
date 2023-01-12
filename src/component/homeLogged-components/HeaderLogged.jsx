import { Link } from "react-router-dom";

const HeaderLogged = ({ user }) => {
  return (
    <div className="header">
      <div className="header-title">ХЭРХЭН АЖИЛЛАХ ВЭ?</div>
      <Link to="/login">
        <div className="header-logged">{user.username}</div>
      </Link>
    </div>
  );
};
export default HeaderLogged;
