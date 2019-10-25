import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  margin-bottom: 60px;
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

export const LogoLink = styled.div`
  display: inline-block;
  margin: 0 40px 20px 0;
  max-width: 160px;
  width: 100%;
`

export const TitleElement = styled.h1`
  line-height: 140%;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);

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
  margin-top: 22px;
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
    width: 44px;
  }
`
