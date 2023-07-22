import Button from "../../Button";

import PizzaImage from "../../../assets/images/pizza.png";

import { ProfileCardContainer } from "./styles";

type MeuComponenteProps = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileCard = (props: MeuComponenteProps) => {
  return (
    <div className="container">
      <ProfileCardContainer>
        <img src={PizzaImage} alt="imagem pizza" />
        <div>
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
        </div>
        <Button
          onClick={() => props.setModalState(true)}
          name="Adicionar ao Carrinho"
        />
      </ProfileCardContainer>
    </div>
  );
};

export default ProfileCard;
