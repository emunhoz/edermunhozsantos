import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleElement = styled.h1`
  line-height: 140%;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);

  ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 5rem;
  `}

  ${media.greaterThan('large')`
    line-height: 1.1;
    font-size: 6rem;
  `}
`
