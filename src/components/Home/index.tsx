import Banner from "../Banner";
import HomeCard from "./HomeCard";
import { HomeListCard } from "./styles";

import ImageFood from "../../assets/images/laDolce.png";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeListCard className="container">
        <HomeCard
          id={1}
          avaliation="4.1"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="Macarrão"
          infos={["Destaque da Semana", "Japonesa"]}
          image={ImageFood}
        />
        <HomeCard
          id={2}
          avaliation="4.1"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="Macarrão"
          infos={["Italiana"]}
          image={ImageFood}
        />
        <HomeCard
          id={3}
          avaliation="4.1"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="Macarrão"
          infos={["Japonesa"]}
          image={ImageFood}
        />
        <HomeCard
          id={4}
          avaliation="4.1"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="Macarrão"
          infos={["Destaque  do dia"]}
          image={ImageFood}
        />
      </HomeListCard>
    </div>
  );
};

export default Home;
