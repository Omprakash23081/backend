import React from "react";
import axios from "axios";
import { useEffect } from "react";

function about() {
  useEffect(() => {
    const controller = new AbortController();
    setTimeout(async () => {
      await axios
        .get("/about", {
          signal: controller.signal,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log(`Errer during abort signal ${error.message}`);
          }
          console.error("Error fetching data:", error);
        });
    }, 10000);
  }, []);

  return <div>Hi i am in about page !</div>;
}

export default about;
