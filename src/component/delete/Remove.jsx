import { instance } from "../../App";
import { Link } from "react-router-dom";

const Remove = ({ ustgah }) => {
  const remove = async () => {
    await instance.delete(`/boginoo/${ustgah._id}`);
  };
  return (
    <div>
      <button className="loginLogin" onClick={remove}>
        {ustgah.username}
      </button>
      <Link to="/">
        <button className="loginLogin">Буцах</button>
      </Link>
    </div>
  );
};
export default Remove;
