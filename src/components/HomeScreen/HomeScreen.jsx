import React from 'react';
import requests from '../../Request';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Row from '../Row/Row';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* NAVBAR */}
      <NavBar />

      {/* BANNER */}
      <Banner />
      {/* ROWS */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrendingWeek} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="War Movies" fetchURL={requests.fetchWarMovies} />
      <Row title="Fantasy Movies" fetchURL={requests.fetchFantasyMovies} />
    </div>
  );
};

export default HomeScreen;
