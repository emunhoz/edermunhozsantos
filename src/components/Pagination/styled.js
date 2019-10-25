import styled from 'styled-components'

export const PaginationWrapper = styled.ul`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  justify-content: space-between;
  list-style: none;

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--highlight);
    }
  }
`
