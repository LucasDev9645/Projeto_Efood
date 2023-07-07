import Banner from "../Banner";
import HomeCard from "./HomeCard";
import { HomeListCard } from "./styles";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeListCard className="container">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </HomeListCard>
    </div>
  );
};

export default Home;
