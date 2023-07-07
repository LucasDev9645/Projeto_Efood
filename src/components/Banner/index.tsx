import { BannerPrice, BannerTitle, Image } from "./styles";

import BannerImage from "../../assets/images/fundomacarrao1.png";
const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container">
        <BannerTitle>Macarrão Penne em Molho de Tomate com Frango</BannerTitle>
        <BannerPrice>
          De <span> R$ 80,00 </span>
          <br /> por apenas R$ 59,99
        </BannerPrice>
      </div>
    </Image>
  );
};

export default Banner;
