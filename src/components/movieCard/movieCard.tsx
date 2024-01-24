
import styles from "./movieCard.module.css";

import { useUserContext } from "../../context/useUserContext";
import { Carousel } from "react-responsive-carousel";


const MovieContainer = () => {


  const { currentUser } = useUserContext();
  const movies = currentUser?.movies;

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={1000}
      className={styles.carousel}
    >
      {movies?.map((movie) => (
        <div key={movie.id} className={styles.movieCard}>
          <span className={styles.poster__container}>
            <img
              className={styles.poster}
              // src={https://musicart.xboxlive.com/7/de3d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080}
              // alt={movie.title}
            />
          </span>
          <h6 className={styles.genre}>{movie.genre}</h6>
        </div>
      ))}
    </Carousel>
    
   
  );
};

export default MovieContainer;