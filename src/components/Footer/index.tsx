import Logo from "../../assets/images/logo.svg";
import Instagram from "../../assets/images/instagram-round-svgrepo-com (1) 1.svg";
import Facebook from "../../assets/images/facebook-round-svgrepo-com 1.svg";
import Twiiter from "../../assets/images/twitter-2-svgrepo-com 1.svg";

import { StylesFooter } from "./styles";

const Footer = () => {
  return (
    <StylesFooter>
      <img src={Logo} alt="logo efood" />
      <div>
        <img src={Instagram} alt="instagram" />
        <img src={Facebook} alt="facebook" />
        <img src={Twiiter} alt="twiiter" />
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </StylesFooter>
  );
};

export default Footer;
