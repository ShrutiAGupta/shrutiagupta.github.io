import Hero from "./Hero/Hero";
import Header from "../Shared/layout/Header";
import Me from "./Me/Me";
import BlogHome from "./BlogHome/BlogHome";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "../Shared/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Header />
      <div className="main-content">
        <main id="main">
          <div className="py-[150px]">
          <Me />
          </div>
          <Skills />
          <BlogHome />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
