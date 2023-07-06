const tmdbKey = '1305b5344cc063a0d533a15a78c641d9';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

//getGenres: async function handle fetching 
const getGenres = async () => {

  //variables declaration 
  const genreRequestEndpoint = '/genre/movie/list'; //endpoint to list of all movie genres  
  const requestParams = `?api_key=${tmdbKey}`; //create query string 
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`; 

  //create & handle request to fetch genres 
  try {
    const genresResponse = await fetch(urlToFetch); //awaiting response object returning genres  
    if (genresResponse.ok) {
      const jsonResponse = await genresResponse.json(); //awaiting genres converting to json 
      const { genres } = jsonResponse; //save the 'genres' key of jsonResponse
      return genres;  
    } 
    else {
      throw new Error('Couldn\'t retrieve genres for movies'); //rejected promise 
    }
  } catch (error){ //catch 'new Error' if occured 
    console.log(error); 
  }
};

const getMovies = async () => {

  //variables declaration 
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie'; //endpoint to discover a movie 
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`; //2 params: key & selected genre 
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`; 

  //create & handle request to fetch movies of a selected genre 
  try {
    const moviesResponse = await fetch(urlToFetch); // awaiting response object returning movies 
    if (moviesResponse.ok){
      const jsonResponse = await moviesResponse.json(); // awaiting movies converting to json 
      const movies = jsonResponse.results;
      return movies; 
    } else {
      throw new Error(`Couldn't retrieve any movies for ${selectedGenre}.`); //rejected promise 
    }
  } catch (error){ //return new Error if occurred 
    console.log(error); 
  }
};

const getMovieInfo = async (movie) => {

  //variables declaration 
  const movieId = movie.id; 
  const movieEndpoint = `/movie/${movieId}`; // endpoint for details of a movie given 'id' 
  const requestParams = `?api_key=${tmdbKey}`; 
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`; 

  //create & handle request to fetch movie details 
  try {
    const detailsResponse = await fetch(urlToFetch); // awaiting response object details about a movie  
    if (detailsResponse.ok) {
      const jsonResponse = await detailsResponse.json(); 
      const movieInfo = jsonResponse; 
      return movieInfo; 
    } else {
      throw new Error('Couldn\'t not retrieve details about the movie.');
    }

  } catch (error) {
    console.log(error); 
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies(); //awaiting since it returns a promise 
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie); 
  displayMovie(info); 
};

getGenres().then(populateGenreDropdown);

playBtn.onclick = showRandomMovie; //add event listener 
