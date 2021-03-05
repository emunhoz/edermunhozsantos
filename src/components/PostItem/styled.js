import styled from 'styled-components'
import Img from 'gatsby-image'
import LocalizedLink from '../LocalizedLink'

export const PostItemLink = styled(LocalizedLink)`
  text-decoration: none;
  margin-bottom: var(--space);
  transition: all 0.2s ease;
  display: block;
  margin-bottom: 3em;

  :hover {
    h2 {
      text-decoration: underline;
    }
  }
`

export const PostItemImg = styled(Img)`
  width: 100%;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(var(--space) * 1.5) var(--space);
  position: relative;
`

export const PostItemTag = styled.span`
  background: var(--bg-light);
  display: inline-flex;
  font-size: 1.6rem;
  margin-bottom: var(--space-sm);
  padding: 0 1rem;
  height: 2.5rem;
  margin: .2rem;
  border-radius: 1.2rem;
  align-items: center;
`

export const PostItemDate = styled.time`
  font-size: 1.8rem;
  display: block;
`

export const PostItemTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 44px;
`

export const PostItemDescription = styled.p`
  font-weight: 300;
  line-height: 32px;
`
