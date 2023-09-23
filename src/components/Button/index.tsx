import * as S from "./styled";

type Props = {
  name: string;
  onClick?: React.MouseEventHandler<Element>;
  type?:
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & "button")
    | "reset"
    | "submit"
    | undefined;
};

const Button = ({ name, onClick, type }: Props) => {
  return (
    <S.ButtonStyles onClick={onClick} type={type}>
      {name}
    </S.ButtonStyles>
  );
};

export default Button;
