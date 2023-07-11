import ProfileCard from "./ProfileCard";

import ImageProfileHeader from "../../assets/images/fundocurto.svg";
import PresentationImage from "../../assets/images/imagemlimpa.png";

import {
  CardListContainer,
  ImageHeaderProfile,
  ImagePresentationHeader,
} from "./styles";

const Profile = () => {
  return (
    <div>
      <div>
        <ImageHeaderProfile
          src={ImageProfileHeader}
          alt="imagem de fundo do menu"
        />
      </div>
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
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </CardListContainer>
    </div>
  );
};

export default Profile;
