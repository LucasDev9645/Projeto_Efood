import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/cart.svg";
import { HeaderCart, HeaderContainer, HeaderLinks } from "./styles";

const Header = () => {
  return (
    <HeaderContainer className="container">
      <div>
        <img src={Logo} alt="imagem efood" />
      </div>
      <nav>
        <HeaderLinks>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Cardápio</a>
          </li>
          <li>
            <a href="#">Promoções</a>
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
