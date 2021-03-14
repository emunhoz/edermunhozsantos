import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: calc(var(--space) * 6);
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: inherit;
    margin-bottom: calc(var(--space) * 10);
  `}
`

export const ProfileWrapper = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    order: 2;
    flex-flow: column;
  `}
`

export const LogoLink = styled.div`
  display: inline-block;
  max-width: 150px;
  width: 100%;
  margin-bottom: 30px;

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const TitleElement = styled.h1`
  line-height: 140%;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;

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
  margin-bottom: 10px;
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
  line-height: 32px;
`