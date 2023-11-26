import * as S from "./styles";

const Tag = ({ children, size = "small" }: TagProps) => {
  return <S.TagContainer size={size}>{children}</S.TagContainer>;
};

export default Tag;
