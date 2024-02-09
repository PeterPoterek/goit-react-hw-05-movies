import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);
  const [noReviewsMessage, setNoReviewsMessage] = useState('');

  useEffect(() => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q',
      },
    };

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        options
      )
      .then(response => {
        const receivedReviews = response.data.results;
        setReviewsList(receivedReviews);

        if (receivedReviews.length === 0) {
          setNoReviewsMessage('We dont have any reviews for this movie.');
        } else {
          setNoReviewsMessage('');
        }
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {noReviewsMessage && <p>{noReviewsMessage}</p>}
      {reviewsList.map(reviewListItem => (
        <div key={reviewListItem.id}>
          <p>Author: {reviewListItem.author}</p>
          <p>{reviewListItem.content}</p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
