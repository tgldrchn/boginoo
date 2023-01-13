import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">ХЭРХЭН АЖИЛЛАХ ВЭ?</div>
      <Link to="/login">
        <button className="headerButton">НЭВТРЭХ</button>
      </Link>
    </div>
  );
};
export default Header;
