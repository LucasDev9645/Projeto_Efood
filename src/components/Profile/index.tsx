import { Link } from "react-router-dom";

import ProfileCard from "./ProfileCard";

import PizzaImage from "../../assets/images/imageModal.png";
import Close from "../../assets/images/close.png";

import efoodLogo from "../../assets/images/logo.svg";
import ImageProfileHeader from "../../assets/images/fundocurto.svg";
import PresentationImage from "../../assets/images/imagemlimpa.png";
import Cart from "../../assets/images/cart.svg";

import {
  CardListContainer,
  ImagePresentationHeader,
  ProfileMenuContainer,
} from "./styles";
import Button from "../Button";
import {
  ContainerModalCard,
  ImgModal,
  ModalCard,
  ModalCardDescription,
} from "./ProfileCard/styles";

const Profile = () => {
  return (
    <div>
      <ImagePresentationHeader
        style={{
          backgroundImage: `url(${ImageProfileHeader})`,
          height: "11rem",
        }}
      >
        <ProfileMenuContainer className="container">
          <h3>Restaurantes</h3>
          <Link to="/">
            <img src={efoodLogo} alt="logo efood" />
          </Link>
          <div>
            <p>0-produto(s)</p>
            <a href="#">
              <img src={Cart} alt="imagem carrinho" />
            </a>
          </div>
        </ProfileMenuContainer>
      </ImagePresentationHeader>

      <div>
        <ImagePresentationHeader
          style={{ backgroundImage: `url(${PresentationImage})` }}
        >
          <div className="container">
            <h1>La Dolce Vita Trattoria</h1>
            <h2>Italiana</h2>
          </div>
        </ImagePresentationHeader>
      </div>
      <CardListContainer className="container">
        <ul>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </ul>
      </CardListContainer>
      <ContainerModalCard>
        <ModalCard>
          <ImgModal>
            <img src={PizzaImage} alt="imagem pizza" />
          </ImgModal>
          <ModalCardDescription>
            <header>
              <h3>Pizza Marguerita</h3>
              <img src={Close} alt="imagem pizza" />
            </header>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button name="Adicionar ao Carrinho - R$ 60,90" />
          </ModalCardDescription>
        </ModalCard>
        <div className="overlay"></div>
      </ContainerModalCard>
    </div>
  );
};

export default Profile;
