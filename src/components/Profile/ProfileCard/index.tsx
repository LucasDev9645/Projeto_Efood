import Button from "../../Button";
import { ProfileCardContainer } from "./styles";

export type Props = {
  setModalOpen: (state: boolean) => void;
  foto: string;
  nome: string;
  descricao: string;
};

const ProfileCard = ({ setModalOpen, foto, nome, descricao }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 150) + " ...";
    }
    return description;
  };

  return (
    <div className="container">
      <ProfileCardContainer>
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
      </ProfileCardContainer>
    </div>
  );
};

export default ProfileCard;
