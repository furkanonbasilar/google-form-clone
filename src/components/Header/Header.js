import React, { useState } from "react";
import "./Header.scss";
const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="header">
      <div className="questions-answers">
        <span
          onClick={() => setActiveIndex(0)}
          className={activeIndex === 0 ? "header-active" : null}
        >
          Sorular
        </span>
        <span
          onClick={() => setActiveIndex(1)}
          className={activeIndex === 1 ? "header-active" : null}
        >
          Yanıtlar
        </span>
      </div>
    </div>
  );
};

export default Header;
