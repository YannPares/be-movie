import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import styles from "./page.module.css";
import Head from 'next/head';

type Props = {}

function About({ }: Props) {
return (
    <>
    <Header/>
      <main>
        <section className={styles.about}>
          <h2 className={styles.title}>About</h2>
         
          <article className={styles.data__wrapper}>
            <section className={styles.data__title}>
              <p className={styles.description}>
                bemovie is a movie database application that allows users to search for movies, view details, and add them to their favorites. The application is built using Next.js, TypeScript, and Tailwind CSS.

              </p>
            </section>
            
          </article>
          <section className={styles.data__btn}>
          
          </section>
        </section>
      </main>
    <Footer/>
    </>
  );
};

export default About