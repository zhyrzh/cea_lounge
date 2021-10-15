import React from "react";

const index = () => {
  return (
    <div className="search-result">
      <div className="search-result-container">
        <div className="topic-item-container">
          <div className="topic-item">
            <div className="topic-item__left">
              <h1>Differential Equation Quiz</h1>
              <h2>Jane Doe</h2>
              <svg
                width="40"
                height="31"
                viewBox="0 0 40 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L19.8947 18L30 10"
                  stroke="#F35167"
                  stroke-width="20"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="topic-item__right">
              <div className="extra-info">
                <div className="bullet"></div>
                <p>image</p>
              </div>
              <div className="extra-info">
                <div className="bullet"></div>
                <p>extra info</p>
              </div>
            </div>
          </div>
          <div className="topic-item">
            <div className="topic-item__left">
              <h1>Differential Equation Quiz</h1>
              <h2>Jane Doe</h2>
            </div>
            <div className="topic-item__right">
              <h2 style={{ color: "red" }}></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
