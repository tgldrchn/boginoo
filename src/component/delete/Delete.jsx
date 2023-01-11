import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../../App";
import Remove from "./Remove";

const Delete = () => {
  const [user, setUser] = useState();
  const getUser = async () => {
    const res = await instance.get("/");
    setUser(res.data.data);
  };
  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <div>
      {user &&
        user.map((user) => {
          return <Remove de={user} />;
        })}
    </div>
  );
};
export default Delete;
