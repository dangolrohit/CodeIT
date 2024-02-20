import Button from "./Button";
import "./ads.css";
function AdsOne() {
  return (
    <>
      <div className="adsBody">
        <div className="adsContent">
          <h2>
            More than <span style={{ color: "yellow" }}>60,000</span> Student
            has joind our courses
          </h2>
          <p style={{ color: "white" }}>
            We not only offer career-oriented IT training in Nepal as per
            industry needs but also assist in successful job placements for
            deserving students and professionals.
          </p>
          <Button label="Get Admission" />
        </div>
      </div>
    </>
  );
}
export default AdsOne;
