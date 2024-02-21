import PlacementCard from "./PlacementCard";
import "./placement.css";

function Placement() {
  return (
    <>
      <div className="Placement">
        <h1> Our Placement Partner </h1>;
        <div className="placementCardsCollection">
          <PlacementCard photo="https://codeit.com.np/storage/01HP6MJDW00XDMV3R0CJ6BWHTN.webp" />
          <PlacementCard photo="https://codeit.com.np/storage/01HN7N09YDXZ88RSA48G6GE7TY.jpg" />
          <PlacementCard photo="https://codeit.com.np/storage/01HP6MMS9TTFMKRA15QHH9R3DH.webp" />
          <PlacementCard photo="https://codeit.com.np/storage/01HN7MZ9N0FYV7K8WVAYNX5Q60.jpg" />
        </div>
      </div>
    </>
  );
}

export default Placement;
