import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div style={{textAlign: "center",}}> 
        <p
          style={{
            color: "tomato",
            fontSize: "1.2rem",
            margin: "2em",
          }}
        >
          Sorry, something went wrong!
        </p>
        <Link to={"/"}>Back to List</Link>
      </div>
    </>
  );
};

export default ErrorPage;
