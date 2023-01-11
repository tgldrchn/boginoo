import { instance } from "../../App";
import { Link } from "react-router-dom";

const Remove = ({ de }) => {
  const remove = async () => {
    await instance.delete(`/${de._id}`);
  };
  return (
    <div>
      <button onClick={remove}>{de.url}</button>
      <Link to="/">
        <button>buts</button>
      </Link>
    </div>
  );
};
export default Remove;
