import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button/Button";

const Home = () => {
  const [word, setWord] = useState("");

  const fetchWords = async () => {
    const data = await fetch("");
    const result = data.json();

    const randomNumber = Math.floor(Math.random() * result.length);
    console.log(result[randomNumber]);
    setWord(result[randomNumber]);
  };

  useEffect(() => {
    fetchWords();
  }, []);
  return (
    <div className="flex flex-col mt-10 items-center gap-7">
      <h1 className="text-8xl mb-7 font-medium">HangMan</h1>
      <div >
      <Link to="/play" state={{ wordSelected: "word" }}>
        <Button text="Single player" />
      </Link>
      <Link to="/start">
        <Button text="Multi player" styleType="secondary" />
      </Link>
      </div>
    </div>
  );
};

export default Home;
