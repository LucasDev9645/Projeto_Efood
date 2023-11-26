import { Link } from "react-router-dom";

import Tag from "../../Tag";

import Star from "../../../assets/images/estrela.svg";

import * as S from "./styles";

const Card = ({
  image,
  title,
  avaliation,
  description,
  infos,
  id,
  emphasis,
}: CardProps) => {
  return (
    <S.HomeCardContainer>
      <S.HomeCardImage src={image} alt={title} />
      <S.Infos>
        <Tag>{infos}</Tag>
        {emphasis ? <Tag>Destaque da Semana</Tag> : ""}
      </S.Infos>
      <S.ContainerDescription>
        <S.TitleContainer>
          <h3>{title}</h3>
          <div>
            <p>{avaliation}</p>
            <img src={Star} alt="estrela" />
          </div>
        </S.TitleContainer>
        <S.HomeCardDescription>{description}</S.HomeCardDescription>
        <Link
          title="Mais informações sobre o restaurtante"
          to={`/profile/${id}`}
        >
          Saiba mais
        </Link>
      </S.ContainerDescription>
    </S.HomeCardContainer>
  );
};

export default Card;
