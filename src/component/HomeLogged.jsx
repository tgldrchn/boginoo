import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import Body from "./home-components/Body";
import HeaderLogged from "./homeLogged-components/HeaderLogged";

const HomeLogged = () => {
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState([]);
  const getLoggedData = async () => {
    const res = await instance.get(`/boginoo/${params.id}`);
    setData(res.data.data);
    console.log(data);
  };

  useEffect(() => {
    getLoggedData();
  }, [params.id]);
  return (
    <div className="Home">
      <HeaderLogged user={data} />
      <Body />
    </div>
  );
};
export default HomeLogged;
