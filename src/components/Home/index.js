import React, { useState } from "react";

const Home = () => {
  const [searchVal, setSearchVal] = useState("");

  const searching = (event) => {
    setSearchVal(event.target.value);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="banner-text">
            <span className="banner-text__blue">CEA </span>Lounge
          </h1>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search a topic"
              value={searchVal}
              onChange={searching}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="featured-questions">
        <div className="featured-questions__container">
          <div className="featured-question">
            <div className="featured-question__top-section">
              <p>Rudy Dutertard</p>
              <p>ANSWERED</p>
            </div>
            <h1 className="featured-question__title">
              Naa mo book sa Life and works of Rizal?
            </h1>
            <div className="featured-question__bottom-section">
              <p>likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
