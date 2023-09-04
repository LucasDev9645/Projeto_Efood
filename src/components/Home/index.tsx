import Card from "./Card";
import { getDescription } from "../../util/ultilits";
import { useGetRestaurantsQuery } from "../../services/api";

import efoodLogo from "../../assets/images/logo.svg";
import ImageHeaderHome from "../../assets/images/fundo.svg";

import { BackgroundHeaderHome, HomeTitle, ListCard } from "./styles";

const Home = () => {
  const { data: foods, isLoading } = useGetRestaurantsQuery();

  return (
    <>
      <BackgroundHeaderHome
        style={{ backgroundImage: `url(${ImageHeaderHome})` }}
      >
        <img src={efoodLogo} alt="logo efood" />

        <HomeTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HomeTitle>
      </BackgroundHeaderHome>

      <div className="container">
        <ListCard>
          {foods &&
            foods.map((food) => (
              <Card
                key={food.id}
                avaliation={food.avaliacao}
                description={getDescription(food.descricao)}
                title={food.titulo}
                infos={food.tipo}
                image={food.capa}
                id={food.id}
              />
            ))}
        </ListCard>
      </div>
    </>
  );
};

export default Home;
