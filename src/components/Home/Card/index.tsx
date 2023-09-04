import { Link } from "react-router-dom";

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
  avaliation: number;
  description: string;
  infos: string;
};

const Card = ({ image, title, avaliation, description, infos, id }: Props) => {
  return (
    <HomeCardContainer>
      <HomeCardImage src={image} alt={title} />
      <Infos>
        <Tag>{infos}</Tag>
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
        <Link to={`/profile/${id}`}>Saiba mais</Link>
      </ContainerDescription>
    </HomeCardContainer>
  );
};

export default Card;
