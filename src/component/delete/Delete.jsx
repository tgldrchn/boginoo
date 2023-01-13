import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../../App";
import Remove from "./Remove";

// zuer ustgahad amar bolgoh geed hiisen

const Delete = () => {
  const [user, setUser] = useState();
  const getUser = async () => {
    const res = await instance.get("/boginoo");
    setUser(res.data.data);
  };
  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <div>
      {user &&
        user.map((user) => {
          return <Remove ustgah={user} />;
        })}
    </div>
  );
};
export default Delete;
