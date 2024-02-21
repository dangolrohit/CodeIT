import CourseCard from "./CourseCard";
import "./courses.css";

function Courses() {
  return (
    <>
      <div className="Courses">
        <h1>Our Popular Courses</h1>;
        <div className="cardsCollection">
          <CourseCard
            courseTitle="UI/UX Design"
            photo="https://codeit.com.np/storage/01HNN3ND9B6DDXXQ4G9JSA8DY2.webp"
          />
          <CourseCard
            courseTitle="Web Designing"
            photo="https://codeit.com.np/storage/01HNS6PC6V82AFCBMWM20TC5A1.webp"
          />
          <CourseCard
            courseTitle="Futter Training"
            photo="https://codeit.com.np/storage/01HNMPXQVPZXYT54XPPNMEBJZY.webp"
          />
        </div>
      </div>
    </>
  );
}

export default Courses;
