import React from "react";
const URL = "https://rickandmortyapi.com/api/character";
const Fetching = () => {
  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = response.json();
      return data;
    } catch (e) {
      console.log(e.message);
    }
  };
  let x = getData();
  console.log(x);
  return (
    <div>
      <button disabled={true}></button>
    </div>
  );
};

export default Fetching;
