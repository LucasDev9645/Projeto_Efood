import { useState } from "react";
import { useParams } from "react-router-dom";

import ProfileCard from "./ProfileCard";
import { Menu } from "../../util/types";
import { useGetRestaurantQuery } from "../../services/api";

import Modal from "../Modal";

import { CardListContainer, ContainerModalCard } from "./styles";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalDate, setModalDate] = useState<Menu>();

  const paramsId = useParams();
  const { data: restaurant } = useGetRestaurantQuery(paramsId.id!);

  if (restaurant)
    return (
      <div>
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
