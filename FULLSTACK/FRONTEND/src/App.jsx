import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState(null);
  async function getdata() {
    try {
      const gdata = await Axios.get("/data");
      setData(gdata.data.massage || []);
    } catch (error) {
      console.log(`${error} data fatching is unsecessfull`);
    }
  }
  return (
    <>
      <h1>to det data click hear</h1>
      <button onClick={getdata}>click on it</button>
      {data && (
        <ul>
          {data.map((msg, ind) => (
            <li key={ind}>{msg}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default App;
