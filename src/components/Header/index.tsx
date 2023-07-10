import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/cart.svg";

import { HeaderCart, HeaderContainer, HeaderLinks } from "./styles";

const Header = () => {
  return (
    <HeaderContainer className="container">
      <div>
        <Link to="/">
          <img src={Logo} alt="imagem efood" />
        </Link>
      </div>
      <nav>
        <HeaderLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Cardápio</Link>
          </li>
          <li>
            <Link to="/promotions">Promoções</Link>
          </li>
        </HeaderLinks>
      </nav>
      <HeaderCart>
        <p>0-produto(s)</p>
        <img src={Cart} alt="imagem carrinho" />
      </HeaderCart>
    </HeaderContainer>
  );
};

export default Header;
