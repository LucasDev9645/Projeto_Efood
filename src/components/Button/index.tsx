import { ButtonStyles } from "./styled";

type Props = {
  name: string;
  onClick?: React.MouseEventHandler<Element>;
};

const Button = ({ name, onClick }: Props) => {
  return <ButtonStyles onClick={onClick}>{name}</ButtonStyles>;
};

export default Button;
