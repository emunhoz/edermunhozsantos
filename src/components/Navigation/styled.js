import styled from 'styled-components'
import LocalizedLink from '../LocalizedLink'

export const Navigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavigationLink = styled(LocalizedLink)`
  text-transform: uppercase;
  font-size: 18px;
  color: var(--text-dark);
  text-decoration: none;
  position: relative;
  padding: 0 var(--space-sm);
  text-align: center;
  letter-spacing: 0.8px;
  &:last-child {
    padding-right: 0;
  }
  &.active {
    text-decoration: underline;
  }
`
