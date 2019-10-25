import styled from 'styled-components'
import media from 'styled-media-query'

export const Description = styled.p`
  line-height: 1.5;
  font-size: 2.5rem;
  font-weight: 100;
  margin-bottom: var(--space-lg);

  ${media.greaterThan('medium')`
    font-size: 3rem;
  `}

  ${media.greaterThan('large')`
    font-size: 3.5rem;
  `}
`
