import Tag from "../../Tag";

import Star from "../../../assets/images/estrela.svg";

import {
  ContainerDescription,
  HomeCardContainer,
  HomeCardDescription,
  HomeCardImage,
  Infos,
  TitleContainer,
} from "./styles";

type Props = {
  id?: number;
  image: string;
  title: string;
  avaliation: string;
  description: string;
  infos: string[];
};

const Card = ({ image, title, avaliation, description, infos }: Props) => {
  return (
    <HomeCardContainer>
      <HomeCardImage src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info} size="small">
            {info}
          </Tag>
        ))}
      </Infos>
      <ContainerDescription>
        <TitleContainer>
          <h3>{title}</h3>
          <div>
            <p>{avaliation}</p>
            <img src={Star} alt="estrela" />
          </div>
        </TitleContainer>
        <HomeCardDescription>{description}</HomeCardDescription>
        <a href="#">Saiba mais</a>
      </ContainerDescription>
    </HomeCardContainer>
  );
};

export default Card;
