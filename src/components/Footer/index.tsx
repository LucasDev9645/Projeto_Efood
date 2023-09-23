import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import Instagram from "../../assets/images/instagram-round-svgrepo-com.svg";
import Facebook from "../../assets/images/facebook-round-svgrepo-com.svg";
import Twiiter from "../../assets/images/twitter-2-svgrepo-com.svg";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.StylesFooter>
      <img src={Logo} alt="logo efood" />
      <div>
        <Link to="https://www.instagram.com/" title="Instagram efood">
          <img src={Instagram} alt="instagram" />
        </Link>
        <Link to="https://www.facebook.com/" title="Facebook efood">
          <img src={Facebook} alt="facebook" />
        </Link>
        <Link to="https://twitter.com/" title="Twitter efood">
          <img src={Twiiter} alt="twiiter" />
        </Link>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.StylesFooter>
  );
};

export default Footer;
