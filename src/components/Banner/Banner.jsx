import React from 'react';
import './Banner.css';

const Banner = () => {
  const truncate = (string, limit) => {
    return string?.length > limit
      ? string.substr(0, limit - 1) + '.......'
      : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://www.cine-tales.com/wp-content/uploads/Netflix.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto
          eligendi culpa incidunt minus, distinctio amet ducimus praesentium
          rerum ipsam eum, necessitatibus vel velit perferendis quae aliquid
          optio repellendus quasi officia ad voluptas suscipit porro ut? Neque
          laborum dolore, eum dolorum molestias sint suscipit nisi quae placeat
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto
          eligendi culpa incidunt minus, distinctio amet ducimus praesentium
          rerum ipsam eum, necessitatibus vel velit perferendis quae aliquid
          optio repellendus quasi officia ad voluptas suscipit porro ut? Neque
          laborum dolore, eum dolorum molestias sint suscipit nisi quae placeat
          perferendis quia fuga!`,
            200
          )}
        </h2>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
