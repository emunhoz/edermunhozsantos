import React from 'react'
import Navigation from '../Navigation'
import Languages from '../Languages'
import { ToggleThemeSite } from '../ThemeToggler'

import * as S from './styled'

const Header = () => (
  <S.HeaderWrapper>
    <S.Container>
      <ToggleThemeSite />
    </S.Container>
  </S.HeaderWrapper>
)

export default Header
