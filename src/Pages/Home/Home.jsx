import { Helmet } from "react-helmet-async";
import Cards from "./Cards";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EstateHospitalityHub | Home</title>
      </Helmet>
      <Carousel></Carousel>
      <Cards></Cards>
    </div>
  );
};

export default Home;
