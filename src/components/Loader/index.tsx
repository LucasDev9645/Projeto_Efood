import { ClockLoader } from "react-spinners";

import { colors } from "../../styles/styles";

import * as S from "./style";

const Loader = () => {
  return (
    <S.LoaderContainer>
      <ClockLoader color={colors.red} />
    </S.LoaderContainer>
  );
};

export default Loader;
