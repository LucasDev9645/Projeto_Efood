import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetRestaurantQuery } from "../../services/api";
import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";

import efoodLogo from "../../assets/images/logo.svg";
import ImageProfileHeader from "../../assets/images/fundocurto.svg";
import Cart from "../../assets/images/cart.svg";

import * as S from "./style";

const RestaurantHeader = () => {
  const paramsId = useParams();
  const { data: restaurant } = useGetRestaurantQuery(paramsId.id!);

  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  return (
    <>
      <S.ImagePresentationHeader
        style={{
          backgroundImage: `url(${ImageProfileHeader})`,
          height: "11rem",
        }}
      >
        <S.ProfileMenuContainer className="container">
          <Link title="Clique aqui para acessar a lista de restaurantes" to="/">
            <h3>Restaurantes</h3>
          </Link>
          <img src={efoodLogo} alt="logo efood" />
          <div>
            <p>{items.length} - produto(s)</p>
            <a title="Carrinho de produtos" onClick={() => dispatch(open())}>
              <img src={Cart} alt="imagem carrinho" />
            </a>
          </div>
        </S.ProfileMenuContainer>
      </S.ImagePresentationHeader>

      <div>
        {restaurant && (
          <S.ImagePresentationHeader
            style={{
              backgroundImage: `url(${restaurant.capa})`,
            }}
          >
            <div className="container">
              <h1>{restaurant.titulo}</h1>
              <h2>{restaurant.tipo}</h2>
            </div>
          </S.ImagePresentationHeader>
        )}
      </div>
    </>
  );
};

export default RestaurantHeader;
