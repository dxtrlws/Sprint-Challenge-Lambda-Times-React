import React from 'react';
import * as S from './styles'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <S.TopBar >
      <S.Container>
        <S.ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
          </S.ContainerLeft>
        <S.ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
          </S.ContainerCenter>
        <S.ContainerRight>
          <span>LOG IN</span>
          </S.ContainerRight>
        </S.Container>
      </S.TopBar>
  )
}

export default TopBar;