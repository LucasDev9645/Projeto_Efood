import ImageFood from "../../../assets/images/sushi.png";
import Star from "../../../assets/images/estrela.svg";

import {
  ContainerDescription,
  HomeCardContainer,
  HomeCardDescription,
  HomeCardImage,
  TitleContainer,
} from "./styles";

const HomeCard = () => {
  return (
    <HomeCardContainer className="container">
      <HomeCardImage src={ImageFood} alt="" />
      <ContainerDescription>
        <TitleContainer>
          <h3>Hioki Sushi</h3>
          <div>
            <p>4.9</p>
            <img src={Star} alt="" />
          </div>
        </TitleContainer>
        <HomeCardDescription>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </HomeCardDescription>
        <a href="#">Saiba mais</a>
      </ContainerDescription>
    </HomeCardContainer>
  );
};

export default HomeCard;
