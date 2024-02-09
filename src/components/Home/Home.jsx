import { TrendingListContext } from 'components/App';
import { CurrentMovieContext } from 'components/App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { trendingList } = useContext(TrendingListContext);
  const { setCurrentMovie } = useContext(CurrentMovieContext);
  return (
    <div>
      <h1>Trending Today</h1>

      <ul>
        {trendingList.map((element, index) => {
          if (!element.title) return null;
          return (
            <li key={`${element.id}${index}`}>
              <Link
                onClick={() => {
                  setCurrentMovie(element.id);
                }}
                to={`/movies/${element.id}`}
              >
                {element.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
