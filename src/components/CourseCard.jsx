import React from "react";
import "./coursecard.css";

function CourseCard(props) {
  return (
    <>
      <div className="courseCard">
        <div className="cardImg">
          <img src={props.photo} alt="" />
          <div className="cardContent">{props.courseTitle}</div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
