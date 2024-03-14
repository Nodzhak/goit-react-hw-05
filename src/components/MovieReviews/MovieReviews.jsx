import { getReviewsDetails } from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getRewies = async () => {
      try {
        const results = await getReviewsDetails(movieId);
        setReview(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getRewies();
  }, [movieId]);

  return (
    <section className={css.review}>
      <div className={css.container}>
        {review.length > 0 ? (
          <ul>
            {review.map(({ id, author, content }) => (
              <li key={id} className={css.item}>
                <h3 className={css.author}>Author: {author}</h3>
                <p className={css.content}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.text}>We dont have any reviews</p>
        )}
      </div>
    </section>
  );
};
export default MovieReviews;