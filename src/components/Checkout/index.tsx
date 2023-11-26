import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

import { closeOrderOpen, open, clear } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import { usePurchaseMutation } from "../../services/api";
import Button from "../Button";
import { formatPrice } from "../../util/ultilits";

import { Overlay } from "../Cart/style";
import * as S from "./style";

const Checkout = () => {
  const { isOrderOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  );
  const [continuePayment, setContinuePayment] = useState(false);
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",

      cardOwner: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.string()
        .min(10, "O endereço precisa ter pelo menos 10 caracteres")
        .required("O campo é obrigatório"),
      city: Yup.string()
        .min(4, "A cidade precisa ter pelo menos 4 caracteres")
        .required("O campo é obrigatório"),
      zipCode: Yup.string()
        .min(9, "O cep precisa ter 9 caracteres")
        .max(9)
        .required("O campo é obrigatório"),
      number: Yup.string()
        .min(1, "O número precisa ter pelo menos 1 caracteres")
        .max(5)
        .required("O campo é obrigatório"),
      cardOwner: Yup.string().when((values, schema) =>
        continuePayment ? schema.required("O campo é obrigatório") : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        continuePayment ? schema.required("O campo é obrigatório") : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        continuePayment ? schema.required("O campo é obrigatório") : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        continuePayment ? schema.required("O campo é obrigatório") : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        continuePayment ? schema.required("O campo é obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),
      });
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isChanged && isInvalid) return message;
    return "";
  };

  const addToCart = () => {
    dispatch(open());
    dispatch(closeOrderOpen());
  };

  const nextPayment = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setContinuePayment(true);
      }
    });
  };

  const closeCart = () => {
    navigate("/");
    dispatch(closeOrderOpen());
    dispatch(clear());
  };

  const totalPrice = () => {
    return items.reduce((acumulator, value) => {
      return (acumulator += value.preco);
    }, 0);
  };

  return (
    <>
      {isSuccess && data ? (
        <S.MessageContainer>
          <Overlay />
          <S.CompletionMessage>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.ButtonsContainer>
              <Button onClick={closeCart} name="Concluir" />
            </S.ButtonsContainer>
          </S.CompletionMessage>
        </S.MessageContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.OrderContainer className={isOrderOpen ? "is-open" : ""}>
            <Overlay />
            <S.FormBar>
              <p>Entrega</p>
              <S.InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("fullName", form.errors.fullName)}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage("address", form.errors.address)}</small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage("city", form.errors.city)}</small>
              </S.InputGroup>
              <S.InputNumbers>
                <div>
                  <label htmlFor="zipCode">Cep</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99999-999"
                  />
                  <small>
                    {getErrorMessage("zipCode", form.errors.zipCode)}
                  </small>
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage("number", form.errors.number)}</small>
                </div>
              </S.InputNumbers>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.ButtonPaymentContainer>
                <p onClick={nextPayment}>Continuar com o pagamento</p>
                <p onClick={addToCart}>Voltar para o carrinho</p>
              </S.ButtonPaymentContainer>
            </S.FormBar>
          </S.OrderContainer>
          {continuePayment ? (
            <S.OrderConfirm>
              <S.FormBar>
                <p>
                  Pagamento - Valor a pagar{" "}
                  <span>{formatPrice(totalPrice())}</span>
                </p>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome do cartão</label>
                  <input
                    id="cardOwner"
                    type="text"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage("cardOwner", form.errors.cardOwner)}
                  </small>
                </S.InputGroup>
                <S.InputNumbers
                  style={{ gridTemplateColumns: "13.75rem auto" }}
                >
                  <div>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999 9999 9999 9999"
                    />
                    <small>
                      {getErrorMessage("cardNumber", form.errors.cardNumber)}
                    </small>
                  </div>
                  <div>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                    />
                    <small>
                      {getErrorMessage("cardCode", form.errors.cardCode)}
                    </small>
                  </div>
                </S.InputNumbers>
                <S.InputNumbers>
                  <div>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage(
                        "expiresMonth",
                        form.errors.expiresMonth
                      )}
                    </small>
                  </div>
                  <div>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage("expiresYear", form.errors.expiresYear)}
                    </small>
                  </div>
                </S.InputNumbers>
                <S.ButtonsContainer>
                  <Button
                    name={isLoading ? "Finalizando..." : "Finalizar Pagamento"}
                    type="submit"
                  />
                  <Button
                    name="Voltar para a edição de endereço"
                    onClick={() => setContinuePayment(false)}
                  />
                </S.ButtonsContainer>
              </S.FormBar>
            </S.OrderConfirm>
          ) : (
            <></>
          )}
        </form>
      )}
    </>
  );
};
export default Checkout;
