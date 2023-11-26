import Button from "../../Button";

import * as S from "./styles";

const ProfileCard = ({ setModalOpen, foto, nome, descricao }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 150) + " ...";
    }
    return description;
  };

  return (
    <div className="container">
      <S.ProfileCardContainer>
        <img src={foto} alt="imagem da pizza" />
        <div>
          <h3>{nome}</h3>
          <p>{getDescription(descricao)}</p>
        </div>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          name="Adicionar ao Carrinho"
        />
      </S.ProfileCardContainer>
    </div>
  );
};

export default ProfileCard;
