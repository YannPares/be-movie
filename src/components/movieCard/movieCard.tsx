
import styles from "./movieCard.module.css";
import { useState } from "react";
import { useUserContext } from "../../context/useUserContext";
import Link from "next/link";

const MovieContainer = () => {


  const { currentUser } = useUserContext();
  const movies = currentUser?.movies;

  return (
    <main className={styles.container}>
  
        <li >
     
            <div className={styles.movieCard}>
              <span className={styles.poster__container}>
                <img
                  className={styles.poster}
                  src={"https://images.justwatch.com/poster/249654915/s718/a-serbian-film.jpg"}
     
                />
              </span>
        
              {/* <h6 className={styles.genre}>Genre</h6> */}
            </div>
   
        </li>
        <li >
            <div className={styles.movieCard}>
              <span className={styles.poster__container}>
                <img
                  className={styles.poster}
                  src={"https://musicart.xboxlive.com/7/fec81100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"}
                />
              </span>
              {/* <h6 className={styles.genre}>Genre</h6> */}
            </div>
        </li>
        <li >
            <div className={styles.movieCard}>
              <span className={styles.poster__container}>
                <img
                  className={styles.poster}
                  src={"https://image.tmdb.org/t/p/w500/uC6ykM4OcOaxS7mLMdF7eebdk1Z.jpg"}
                />
              </span>
              {/* <h6 className={styles.genre}>Genre</h6> */}
            </div>
        </li>
        <li >
            <div className={styles.movieCard}>
              <span className={styles.poster__container}>
                <img
                  className={styles.poster}
                  src={"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"}
                />
              </span>
              {/* <h6 className={styles.genre}>Genre</h6> */}
            </div>
        </li>
        <li >
            <div className={styles.movieCard}>
              <span className={styles.poster__container}>
                <img
                  className={styles.poster}
                  src={"https://musicart.xboxlive.com/7/de3d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"}
                />
              </span>
              {/* <h6 className={styles.genre}>Genre</h6> */}
            </div>
        </li>
        
      

         
    
    </main>
  );
};

export default MovieContainer;