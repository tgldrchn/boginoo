import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../App";

const ShortLink = () => {
  const { id } = useParams();
  const getData = async () => {
    const res = await instance.get(`/urls/${id}`);
    window.location.replace(res.data.data.url);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};
export default ShortLink;
