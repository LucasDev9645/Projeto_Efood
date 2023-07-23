import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProfileCard from "./ProfileCard";
import { Restaurants } from "../../util/types";
import { Base_URL } from "../../util/api";

import PizzaImage from "../../assets/images/imageModal.png";
import Close from "../../assets/images/close.png";
import Button from "../Button";
import efoodLogo from "../../assets/images/logo.svg";
import ImageProfileHeader from "../../assets/images/fundocurto.svg";

import Cart from "../../assets/images/cart.svg";

import {
  CardListContainer,
  ImagePresentationHeader,
  ProfileMenuContainer,
} from "./styles";

import {
  ContainerModalCard,
  ImgModal,
  ModalCard,
  ModalCardDescription,
} from "./ProfileCard/styles";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [urlModal, setUrlModal] = useState("");
  const [restaurant, setRestaurant] = useState<Restaurants>([]);

  const paramsId = useParams();

  const handleClick = () => setOpenModal(false);

  useEffect(() => {
    fetch(`${Base_URL}/${paramsId.id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [paramsId]);

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
          style={{
            backgroundImage: `url(${restaurant.capa})`,
          }}
        >
          <div className="container">
            <h1>{restaurant.titulo}</h1>
            <h2>{restaurant.tipo}</h2>
          </div>
        </ImagePresentationHeader>
      </div>

      <CardListContainer className="container">
        <ul>
          {restaurant.cardapio?.map((food) => (
            <ProfileCard
              key={food.id}
              foto={food.foto}
              nome={food.nome}
              descricao={food.descricao}
              setModalUrl={setUrlModal}
              setModalState={setOpenModal}
            />
          ))}
        </ul>
      </CardListContainer>

      <ContainerModalCard className={openModal ? "visible" : ""}>
        <ModalCard>
          <ImgModal>
            <img src={urlModal} alt="imagem pizza" />
          </ImgModal>
          <ModalCardDescription>
            <header>
              <h3>Pizza Marguerita</h3>
              <img onClick={handleClick} src={Close} alt="imagem pizza" />
            </header>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button name="Adicionar ao Carrinho - R$ 60,90" />
          </ModalCardDescription>
        </ModalCard>
        <div className="overlay" onClick={handleClick}></div>
      </ContainerModalCard>
    </div>
  );
};

export default Profile;
