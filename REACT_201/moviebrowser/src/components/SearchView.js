import Hero from "./Hero";
import defaultMovie from "../images/defautMovie.jpg";
import {Link} from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        {movie.poster_path &&(
          <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
          />
          )}
        {(movie.poster_path === null) &&(
          <img
          src={defaultMovie}
          className="card-img-top"
          alt={movie.original_title}
          />
          )}
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details
            Show details
          </Link>
        </div>
    </div>
  </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  if (resultsHtml.length > 0) {
    return (
      <>
        <Hero text={title} />
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      </>
    );
  }
  if (keyword && resultsHtml.length === 0) {
    return (
      <>
        <Hero text={title} />
        No results found!
      </>
    );
  }
};

export default SearchView;
