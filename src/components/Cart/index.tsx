import { useSelector, useDispatch } from "react-redux";

import Button from "../Button";
import { RootReducer } from "../../store";

import bin from "../../assets/images/lixeira-de-reciclagem 1.png";
import { close, remove } from "../../store/reducers/cart";
import { formatPrice } from "../../util/ultilits";

import {
  BinStyles,
  CartContainer,
  ImageFood,
  Overlay,
  Price,
  SideBar,
} from "./style";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((acumulator, value) => {
      return (acumulator += value.preco);
    }, 0);
  };

  return (
    <>
      {items.length !== 0 ? (
        <CartContainer className={isOpen ? "is-open" : ""}>
          <Overlay onClick={() => dispatch(close())} />
          <SideBar>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <ImageFood src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formatPrice(item.preco)}</p>
                    <BinStyles
                      onClick={() => dispatch(remove(item.id))}
                      src={bin}
                      alt="remover do carrinho"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <Price>
              Valor Total: <span>{formatPrice(getTotalPrice())}</span>
            </Price>
            <Button name="Continuar com a Entrega" />
          </SideBar>
        </CartContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
