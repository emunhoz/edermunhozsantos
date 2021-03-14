import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleElement = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 20px;

  ${media.greaterThan('medium')`
    font-size: 4rem;
    line-height: 1.1;
  `}

  ${media.greaterThan('large')`
    font-size: 5rem;
    font-weight: 700;
    line-height: 64px;
    margin-bottom: 30px;
  `}
`
