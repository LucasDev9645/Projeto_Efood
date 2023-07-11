import { ButtonStyles } from "./styled";

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return <ButtonStyles>{name}</ButtonStyles>;
};

export default Button;
