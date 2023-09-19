import { ButtonStyles } from "./styled";

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
    <ButtonStyles onClick={onClick} type={type}>
      {name}
    </ButtonStyles>
  );
};

export default Button;
