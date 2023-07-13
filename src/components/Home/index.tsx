import { Link } from "react-router-dom";

import Card from "./Card";
import Food from "../../Models/Food";

import efoodLogo from "../../assets/images/logo.svg";
import imageFood1 from "../../assets/images/laDolce.png";
import imageFood2 from "../../assets/images/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg";
import imageFood3 from "../../assets/images/sushi.png";
import ImageHeaderHome from "../../assets/images/fundo.svg";

import { BackgroundHeaderHome, HomeTitle, ListCard } from "./styles";

const foods: Food[] = [
  {
    id: 1,
    image: imageFood2,
    title: "Pizza presunto",
    avaliation: "5.0",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Brasileira", "Destaque Semanal"],
  },

  {
    id: 2,
    image: imageFood1,
    title: "Macarrão com Molho Doce",
    avaliation: "4.5",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Espaguete Especial"],
  },

  {
    id: 3,
    image: imageFood2,
    title: "Pizza a Moda",
    avaliation: "4.8",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Brasileira"],
  },

  {
    id: 4,
    image: imageFood1,
    title: "Macarrão Alho e Oleo",
    avaliation: "4.6",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Espaguete"],
  },

  {
    id: 5,
    image: imageFood3,
    title: "Sushi Especial",
    avaliation: "4.1",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Japonesa"],
  },
  {
    id: 6,
    image: imageFood2,
    title: "Pizza Portuguesa",
    avaliation: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Brasileira"],
  },
];

const Home = () => {
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
              avaliation={food.avaliation}
              description={food.description}
              title={food.title}
              infos={food.infos}
              image={food.image}
            />
          ))}
        </ListCard>
      </div>
    </>
  );
};

export default Home;
