import React from "react";
import Characters from "../components/Characters";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setSearchField } = useGlobalContext();
  return (
    <section>
      <div className="text-center mb-10">
        <input
          type="text"
          onChange={(e) => setSearchField(e.target.value)}
          className="w-[80%] md:w-[50%] lg:w-[30%] h-10 p-2 mb-5 rounded-md outline-none"
          placeholder="Search name of character..."
          autoFocus
        />
      </div>
      <div>
        <Characters />
      </div>
    </section>
  );
};

export default Home;
