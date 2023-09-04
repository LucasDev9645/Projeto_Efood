import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProfileCard from "./ProfileCard";
import { Menu } from "../../util/types";
import { useGetRestaurantQuery } from "../../services/api";

import Modal from "../Modal";

import efoodLogo from "../../assets/images/logo.svg";
import ImageProfileHeader from "../../assets/images/fundocurto.svg";
import Cart from "../../assets/images/cart.svg";

import {
  CardListContainer,
  ImagePresentationHeader,
  ProfileMenuContainer,
} from "./styles";

import { ContainerModalCard } from "./styles";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalDate, setModalDate] = useState<Menu>();

  const paramsId = useParams();

  const { data: restaurant } = useGetRestaurantQuery(paramsId.id!);

  if (restaurant)
    return (
      <div>
        <ImagePresentationHeader
          style={{
            backgroundImage: `url(${ImageProfileHeader})`,
            height: "11rem",
          }}
        >
          <ProfileMenuContainer className="container">
            <Link to="/">
              <h3>Restaurantes</h3>
            </Link>
            <img src={efoodLogo} alt="logo efood" />
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
            {restaurant.cardapio.map((food) => (
              <li key={food.id} onClick={() => setModalDate(food)}>
                <ProfileCard
                  foto={food.foto}
                  nome={food.nome}
                  descricao={food.descricao}
                  setModalOpen={setOpenModal}
                />
              </li>
            ))}
          </ul>
        </CardListContainer>

        <ContainerModalCard className={openModal ? "visible" : ""}>
          <Modal modalDate={modalDate} setModalClose={setOpenModal} />
          <div className="overlay" onClick={() => setOpenModal(false)} />
        </ContainerModalCard>
      </div>
    );
};

export default Profile;
