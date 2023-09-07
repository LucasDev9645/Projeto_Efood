import { useDispatch } from "react-redux";

import Button from "../Button";
import { Menu } from "../../util/types";
import { add, open } from "../../store/reducers/cart";

import Close from "../../assets/images/close.png";

import { ImgModal, ModalCard, ModalCardDescription } from "./styles";
import { formatPrice } from "../../util/ultilits";

type Props = {
  setModalClose: (state: boolean) => void;
  modalDate?: Menu;
};

const Modal = ({ modalDate, setModalClose }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(modalDate!));
    dispatch(open());
  };

  return (
    <ModalCard>
      <ImgModal>
        <img src={modalDate?.foto} alt={modalDate?.nome} />
      </ImgModal>
      <ModalCardDescription>
        <header>
          <h2>{modalDate?.nome}</h2>
          <img
            onClick={() => setModalClose(false)}
            src={Close}
            alt="fechar modal"
          />
        </header>
        <p>{modalDate?.descricao}</p>
        <p>{modalDate?.porcao}</p>
        <Button
          onClick={() => {
            addToCart();
            setModalClose(false);
          }}
          name={`Adicionar ao Carrinho - R$ ${formatPrice(modalDate?.preco)}`}
        />
      </ModalCardDescription>
    </ModalCard>
  );
};

export default Modal;
