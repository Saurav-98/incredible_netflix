const API_KEY = 'dce776a432c14eda91e881fe28dc3d7f';

const ENGLISH = '&language=en-US';
const ACTION = '&with_genres=28';
const HORROR = '&with_genres=27';
const COMEDY = '&with_genres=35';
const ROMANCE = '&with_genres=10749';
const DOCUMENTARIES = '&with_genres=99';
const WAR = '&with_genres=10752';
const FANTASY = '&with_genres=14';

const requests = {
  fetchTrendingWeek: `/trending/all/week?api_key=${API_KEY}${ENGLISH}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}${ENGLISH}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}${ENGLISH}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}${ENGLISH}${ACTION}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}${ENGLISH}${COMEDY}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}${ENGLISH}${HORROR}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}${ENGLISH}${ROMANCE}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}${ENGLISH}${DOCUMENTARIES}`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}${ENGLISH}${WAR}`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}${ENGLISH}${FANTASY}`,
};

export default requests;
