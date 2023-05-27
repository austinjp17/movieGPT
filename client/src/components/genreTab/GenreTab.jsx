import React from "react";
import Chip from "../chip/Chip";

//STYLESHEET 
import "./GenreTab.css";

const GenreTab = () => {
  const [expanded, setExpanded] = React.useState(true);
  const genres = ["Action", "Syfi", "Horror"];
  return (
    <>
      <div className="label-dropdown">
        Genres
        
      </div>
      <div
        className="genre-chip-container"
        style={{
          height: expanded ? "fit-content" : "0px",
          paddingBottom: expanded ? "1rem" : "0px",
          paddingTop: expanded ? "1rem" : "0px",
        }}
      >
        {genres.map((genre, index) => {
          return <Chip key={index} text={genre} />;
        })}
      </div>
    </>
  );
};

export default GenreTab;
