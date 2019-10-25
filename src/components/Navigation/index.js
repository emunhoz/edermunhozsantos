import React from 'react'
import useMenu from '../useMenu'

import * as S from './styled'

const Navigation = props => {
  const menuItems = useMenu()

  return (
    <S.Navigation className={props.isActive ? 'active' : ''}>
      {menuItems.map(menu => (
        <S.NavigationLink
          to={menu.link}
          aria-label={menu.name}
          activeClassName='active'
        >
          {menu.name}
        </S.NavigationLink>
      ))}
    </S.Navigation>
  )
}

export default Navigation
