import { Link } from "react-router-dom";

import ProfileCard from "./ProfileCard";

import efoodLogo from "../../assets/images/logo.svg";
import ImageProfileHeader from "../../assets/images/fundocurto.svg";
import PresentationImage from "../../assets/images/imagemlimpa.png";
import Cart from "../../assets/images/cart.svg";

import {
  CardListContainer,
  ImagePresentationHeader,
  ProfileMenuContainer,
} from "./styles";

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
    </div>
  );
};

export default Profile;
