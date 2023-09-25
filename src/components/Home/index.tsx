import Card from "./Card";
import Loader from "../Loader";
import { getDescription } from "../../util/ultilits";
import { useGetRestaurantsQuery } from "../../services/api";

import efoodLogo from "../../assets/images/logo.svg";
import ImageHeaderHome from "../../assets/images/fundo.svg";

import * as S from "./styles";

const Home = () => {
  const { data: foods, isLoading } = useGetRestaurantsQuery();

  return (
    <>
      <S.BackgroundHeaderHome
        style={{ backgroundImage: `url(${ImageHeaderHome})` }}
      >
        <img src={efoodLogo} alt="logo efood" />
        <S.HomeTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HomeTitle>
      </S.BackgroundHeaderHome>
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <S.ListCard>
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
          </S.ListCard>
        )}
      </div>
    </>
  );
};

export default Home;
