import { useState } from "react";
import { useParams } from "react-router-dom";

import ProfileCard from "./ProfileCard";
import Modal from "../Modal";
import Loader from "../Loader";
import { Menu } from "../../util/types";
import { useGetRestaurantQuery } from "../../services/api";

import * as S from "./styles";

type RestaurantParams = {
  paramsId: string;
  id: string;
};

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalDate, setModalDate] = useState<Menu>();
  const paramsId = useParams() as RestaurantParams;
  const { data: restaurant } = useGetRestaurantQuery(paramsId.id);

  if (!restaurant) {
    return <Loader />;
  }
  return (
    <div>
      <S.CardListContainer className="container">
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
      </S.CardListContainer>
      <S.ContainerModalCard className={openModal ? "visible" : ""}>
        <Modal modalDate={modalDate} setModalClose={setOpenModal} />
        <div className="overlay" onClick={() => setOpenModal(false)} />
      </S.ContainerModalCard>
    </div>
  );
};

export default Profile;
