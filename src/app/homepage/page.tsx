"use client";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieContainer from "@/components/movieCard/movieCard";
const Homepage: React.FC = () => {
 

  return (
    <>
    <Header/>
      <section className=''>
   
        {/* <AddMovieModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      </section>

      <main>
         <MovieContainer /> 
      </main>
      <Footer/>
    </>
  );
};

export default Homepage;