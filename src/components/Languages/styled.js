import styled from 'styled-components'
import { Link } from 'gatsby'

export const LanguageWrapper = styled.ul`
  display: flex;
`

export const LanguageItem = styled.li`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: var(--space-sm);
  }
`

export const LanguageLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  color: var(--grayColor);
  font-size: 1.4rem;
  img {
    min-width: 33px;
  }
`
