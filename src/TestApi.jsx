import React, { useState } from "react";

// https://api.pexels.com/v1/search?query=nature&per_page=1

export default function TestApi() {
  const [data, setData] = useState("");

  const getData = (name) => {
    console.log("name", name);

    
    fetch(`https://jsonplaceholder.typicode.com/${name}`)
      .then((res) => res.json())
      .then((d) => {
        console.log("dataaaaaa", d);
      });
  };

  return (
    <div>
      <h1>Test Api</h1>
      <button type="button" onClick={() => getData("comments")}>
        get Data
      </button>
    </div>
  );
}
