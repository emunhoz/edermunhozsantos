import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 82px;
  position: relative;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`

export const Container = styled.div`
  max-width: var(--width-container);
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 var(--space);
  justify-content: flex-end;
`

export const Menu = styled.div`
  width: 100%;
`

export const NavMenu = styled.div`
  width: 100%;
  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
  `}
`

export const NavLanguages = styled.div`
  /* margin-left: var(--space); */
`

export const MenuDesktop = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `}
`

export const MenuMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const NavMobile = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1d1d1d;
  z-index: 1;
`
