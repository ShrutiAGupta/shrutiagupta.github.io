import Portfolio from "../Portfolio/Portfolio";
import ProjectIndividual from "../Portfolio/ProjectIndividual/ProjectIndividual";
import Poetry from "../Poetry/Poetry";
import Blog from "../Blog/Blog";
import About from "../About/About";
import BlogIndividual from "../Blog/BlogIndividual/BlogIndividual";
import PoetryIndividual from "../Poetry/PoetryIndividual/PoetryIndividual";
import Home from "../Home/Home";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Music from "../Music/Music";


export const routerLinks = [
    { showOnNavbar: true, id: "hero", path: "/", label: "Home", type: "scroll", section: "hero" },
    { showOnNavbar: true, id: "about", path: "/about", label: "About", type: "route", element:<About />},
    // { showOnNavbar: true, id: "resume", path: "/resume", label: "Resume", type: "route", element:<Resume />},
    { showOnNavbar: true, id: "timeline", path: "/timeline", label: "Timeline", type: "route", element: <Portfolio />},
    { showOnNavbar: true, id: "blog", path: "/blog", label: "Blog", type: "route", element:<Blog />},
    { showOnNavbar: true, id: "poetry",path: "/poetry",label: "Poetry",type: "route", element:<Poetry />},
    { showOnNavbar: true, id: "photogallery",label: "Gallery",type: "route",path: "/photogallery", element:<PhotoGallery /> },
    { showOnNavbar: true, id: "music", path: "/music", label: "Music", type: "route", element:<Music /> },
    { showOnNavbar: false, id: "blogIndividual", path: "/blog/:slug", label: "BlogIndividual", type: "route", element:<BlogIndividual />},
    { showOnNavbar: false, id: "projectIndividual", path: "/project/:slug", label: "ProjectIndividual", type: "route", element:<ProjectIndividual />},
    { showOnNavbar: false, id: "poetryIndividual", path: "/poetry/:slug", label: "PoetryIndividual", type: "route", element: <PoetryIndividual />}
  ];