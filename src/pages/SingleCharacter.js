import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";

const SingleCharacter = () => {
  const { isLoading, setIsLoading } = useGlobalContext();
  const [character, setCharacter] = useState([]);
  let { id } = useParams();

  const fetchCharacter = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters/${id}`
      );
      const data = await response.json();
      setCharacter(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {character.map((item) => {
        const {
          appearance,
          birthday,
          img,
          nickname,
          occupation,
          portrayed,
          status,
          name,
        } = item;
        return (
          <article
            key={id}
            className=" w-[70%] sm:w-[50%] md:w-[30%] mx-auto mb-10 "
          >
            <div className="relative ">
              <img src={img} alt={name} className="w-full" />

              <div className="absolute bottom-0 left-0 font-bold text-white w-full p-2 bg-[#0000005a]">
                <p>Nickname : {nickname}</p>
                <p>
                  Status :
                  <span
                    className={`${
                      status == "Deceased" ? "text-red-500" : "text-green-500"
                    } `}
                  >
                    {` ${status}`}
                  </span>
                </p>
              </div>
            </div>
            <div className=" p-2 text-lg text-gray-500 bg-white font-bold">
              <p>Name : {name}</p>
              <p>DOB : {birthday}</p>
              <p>
                Occupation :
                {occupation.map((item, i) => {
                  return <span key={i}> {item}</span>;
                })}
              </p>
              <p>Appearance : Season {appearance}</p>
              <p>Portrayed : {portrayed}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default SingleCharacter;
