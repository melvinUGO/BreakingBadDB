import React from "react";
import { useNavigate } from "react-router-dom";

const Character = ({ char_id, img, name, nickname, status }) => {
  const navigate = useNavigate();

  return (
    <article
      className="  w-[80%]  sm:w-[60%]  mx-auto mb-10 rounded-xl cursor-pointer "
      onClick={() => {
        navigate(`/character-info/${char_id}`);
        console.log(char_id);
      }}
    >
      <div className=" sm:h-[200px]">
        <img src={img} alt={name} className="h-full w-full" />
      </div>
      <div className="text-center bg-white py-5 text-lg font-bold rounded-b-[20px] ">
        <p> {name}</p>
      </div>
    </article>
  );
};

export default Character;
