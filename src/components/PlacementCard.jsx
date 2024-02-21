import React from "react";
import "./placementCard.css";

function PlacementCard(props) {
  return (
    <>
      <div className="placemnentCard">
        <div className="placementCardImg">
          <img src={props.photo} alt="" />
        </div>
      </div>
    </>
  );
}

export default PlacementCard;
