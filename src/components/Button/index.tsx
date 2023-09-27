import * as S from "./styled";

const Button = ({ name, onClick, type }: ButtonProps) => {
  return (
    <S.ButtonStyles onClick={onClick} type={type}>
      {name}
    </S.ButtonStyles>
  );
};

export default Button;
