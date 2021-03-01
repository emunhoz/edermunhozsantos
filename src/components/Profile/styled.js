import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  margin-bottom: calc(var(--space) * 5.5);
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
  `}
`

export const LogoLink = styled.div`
  display: inline-block;
  max-width: 150px;
  width: 100%;
  margin-right: 40px;
`

export const TitleElement = styled.h1`
  line-height: 140%;
  font-size: 3rem;
  font-weight: bold;

  ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 4rem;
  `}

  ${media.greaterThan('large')`
    line-height: 1.1;
    font-size: 4.5rem;
  `}
`

export const FindMe = styled.ul`
  list-style: none;
`

export const SocialLink = styled.li`
  display: inline-block;
  margin-right: 15px;
`

export const Link = styled.a`
  color: var(--text-color-normal);
  opacity: 0.5;
  display: inline-block;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 24px;
  }
`

export const Description = styled.p`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 32px;
`