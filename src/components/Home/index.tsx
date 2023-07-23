import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "./Card";
import { Restaurants } from "../../util/types";
import { getDescription } from "../../util/maxLength";
import { Base_URL } from "../../util/api";

import efoodLogo from "../../assets/images/logo.svg";
import ImageHeaderHome from "../../assets/images/fundo.svg";

import { BackgroundHeaderHome, HomeTitle, ListCard } from "./styles";

const Home = () => {
  const [foods, setFoods] = useState<Restaurants[]>([]);

  const paramsId = useParams();

  useEffect(() => {
    fetch(`${Base_URL}`)
      .then((res) => res.json())
      .then((res) => setFoods(res));
  }, [paramsId]);

  return (
    <>
      <BackgroundHeaderHome
        style={{ backgroundImage: `url(${ImageHeaderHome})` }}
      >
        <Link to="/">
          <img src={efoodLogo} alt="logo efood" />
        </Link>
        <HomeTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HomeTitle>
      </BackgroundHeaderHome>

      <div className="container">
        <ListCard>
          {foods.map((food) => (
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
