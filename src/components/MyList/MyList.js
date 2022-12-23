import React from "react";
import "./MyList.Module.css";
import Navbar from "../Navbar/Navbar";
const MyList = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="mylist">
          <div className="mylist-title">Listem</div>
        </div>
      </div>
    </>
  );
};

export default MyList;
