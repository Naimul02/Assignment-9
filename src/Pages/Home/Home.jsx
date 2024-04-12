import { Helmet } from "react-helmet-async";
import Cards from "./Cards";
import Carousel from "./Carousel";
import "animate.css";
import Review from "./Review";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HospitalityHub | Home</title>
      </Helmet>
      <Carousel></Carousel>
      <Cards></Cards>
      <Review></Review>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
