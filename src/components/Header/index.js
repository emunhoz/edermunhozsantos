import React from 'react'
import Navigation from '../Navigation'
import Languages from '../Languages'

import * as S from './styled'

const Header = () => (
  <S.HeaderWrapper>
    <S.Container>
      <S.NavLanguages>
        <Languages />
      </S.NavLanguages>
      <Navigation />
    </S.Container>
  </S.HeaderWrapper>
)

export default Header
