import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleElement = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 10px;

  ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 5rem;
  `}

  ${media.greaterThan('large')`
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 44px;
    margin-bottom: 10px;
  `}
`
