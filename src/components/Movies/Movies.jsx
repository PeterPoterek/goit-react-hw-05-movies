import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h2>Movies</h2>
      <Link to={'/movies/1'}>Movie - 1</Link>
      <Link to={'/movies/2'}>Movie - 2</Link>
    </div>
  );
};

export default Movies;
