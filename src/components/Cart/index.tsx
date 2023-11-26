import { useSelector, useDispatch } from "react-redux";

import { close, remove, orderOpen } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import { formatPrice } from "../../util/ultilits";
import Button from "../Button";

import bin from "../../assets/images/lixeira-de-reciclagem 1.png";

import * as S from "./style";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((acumulator, value) => {
      return (acumulator += value.preco);
    }, 0);
  };

  const openOrder = () => {
    dispatch(orderOpen());
    dispatch(close());
  };

  return (
    <>
      <S.CartContainer className={isOpen ? "is-open" : ""}>
        <S.Overlay onClick={() => dispatch(close())} />
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <S.ImageFood src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{formatPrice(item.preco)}</p>
                      <S.BinStyles
                        onClick={() => dispatch(remove(item.id))}
                        src={bin}
                        alt="remover do carrinho"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <S.Price>
                Valor Total: <span>{formatPrice(getTotalPrice())}</span>
              </S.Price>
              <Button name="Continuar com a Entrega" onClick={openOrder} />
            </>
          ) : (
            <p className="cartNotice">O seu carrinho está vazio!</p>
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  );
};

export default Cart;
