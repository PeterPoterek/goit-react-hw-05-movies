import { useContext } from 'react';
import { TrendingListContext } from 'components/App';
import { CurrentMovieContext } from 'components/App';
import {
  HomeContainer,
  Title,
  MovieList,
  MovieItem,
  MovieLink,
} from './HomeStyles';

const Home = () => {
  const { trendingList } = useContext(TrendingListContext);
  const { setCurrentMovie } = useContext(CurrentMovieContext);

  return (
    <HomeContainer>
      <Title>Trending Today</Title>

      <MovieList>
        {trendingList.map((element, index) => {
          if (!element.title) return null;
          return (
            <MovieItem key={`${element.id}${index}`}>
              <MovieLink
                onClick={() => {
                  setCurrentMovie(element.id);
                }}
                to={`/movies/${element.id}`}
              >
                {element.title}
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;
