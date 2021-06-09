import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        color: "mediumpurple",
        fontFamily: "Verdana",
        boxShadow: "0px 1px 3px 0px gray",
        marginTop: "10rem",
        padding: "2rem 1rem 1rem 1rem",
      }}
    >
      <p>Your response has been successfully submitted. Thank You!</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
