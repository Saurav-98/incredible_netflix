import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../../axios';
import requests from '../../Request';

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(bannerMovie);
  const truncate = (string, limit) => {
    return string?.length > limit
      ? string.substr(0, limit - 1) + '.......'
      : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(bannerMovie?.overview, 200)}
        </h2>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
