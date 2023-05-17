import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <center>
        <div>
          <div>
            <h1>{location.state.id} welcome to the home</h1>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Home;
