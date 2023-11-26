import { useDispatch } from "react-redux";

import Button from "../Button";
import { add, open } from "../../store/reducers/cart";
import { formatPrice } from "../../util/ultilits";

import Close from "../../assets/images/close.png";

import * as S from "./styles";

const Modal = ({ modalDate, setModalClose }: ModalProps) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(modalDate!));
    dispatch(open());
  };

  return (
    <S.ModalCard>
      <S.ImgModal>
        <img src={modalDate?.foto} alt={modalDate?.nome} />
      </S.ImgModal>
      <S.ModalCardDescription>
        <header>
          <h2>{modalDate?.nome}</h2>
          <img
            className="closeImage"
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
      </S.ModalCardDescription>
    </S.ModalCard>
  );
};

export default Modal;
