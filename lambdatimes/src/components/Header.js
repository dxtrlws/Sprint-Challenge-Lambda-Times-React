import React from "react";
import * as S from "./styles";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <S.Header>
      <S.Date>MARCH 32, 2018</S.Date>
      <h1>Lambda Times</h1>
      <S.Temp>98°</S.Temp>
    </S.Header>
  );
};

export default Header;
