import Hero from "./Hero";
import defaultMovie from "../images/defautMovie.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  console.log(id);

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("make an api request", id);
    fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=8603b00b813382377a118fba717ddb9f&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMoviesDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container">
            <div className="row">
              <div className="col-md-3 my-5">
                {movieDetails.poster_path && (
                  <img
                    src={posterPath}
                    alt="..."
                    className="img-fluid shadow rounded"
                  />
                )}
                {(movieDetails.poster_path === null) &&(
                  <img
                  src={defaultMovie}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
                )}
              </div>
              <div className="col-md-9 my-5">
                <h2>{movieDetails.original_title}</h2>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMoviesDetails();
};

export default MovieView;
