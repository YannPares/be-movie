"use client";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieContainer from "@/components/movieCard/movieCard";
const Homepage: React.FC = () => {
 

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
         <MovieContainer /> 
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </>
  );
};

export default Homepage;