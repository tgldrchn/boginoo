import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">ХЭРХЭН АЖИЛЛАЖ БАЙНА ВЭ?</div>
      <Link to="/login">
        <button className="header-button">НЭВТРЭХ</button>
      </Link>
    </div>
  );
};
export default Header;
