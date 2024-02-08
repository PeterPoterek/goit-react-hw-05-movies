import { TrendingListContext } from 'components/App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { trendingList } = useContext(TrendingListContext);
  return (
    <div>
      <h1>Trending Today</h1>

      <ul>
        {trendingList.map((element, index) => {
          if (!element.title) return;
          return (
            <li key={`${element.id}${index}`}>
              <Link to={`/movies/${element.id}`}>{element.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
