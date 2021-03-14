import React from 'react'
import useTranslations from '../useTranslations'
import Logo from '../Logo'
import { Github, LinkedinSquare, Twitter } from 'styled-icons/boxicons-logos'
import * as S from './styled'

export const Profile = () => {
  const { hello, subline, home } = useTranslations()

  return (
    <S.MenuWrapper>
      <S.ProfileWrapper>
        <S.TitleElement>{hello}</S.TitleElement>
        <S.FindMe>
          <S.SocialLink>
            <S.Link href='https://github.com/emunhoz' aria-label='Github'>
              <Github />
            </S.Link>
          </S.SocialLink>
          <S.SocialLink>
            <S.Link
              color='#0077b5'
              href='https://www.linkedin.com/in/eder-munhoz-dos-santos-52965b66'
              aria-label='Linkedin'
            >
              <LinkedinSquare />
            </S.Link>
          </S.SocialLink>
          <S.SocialLink>
            <S.Link
              color='#0077b5'
              href='https://twitter.com/munhoz_eder'
              aria-label='Twitter'
            >
              <Twitter />
            </S.Link>
          </S.SocialLink>
        </S.FindMe>
        <S.Description>{subline}</S.Description>
      </S.ProfileWrapper>
      <S.LogoLink to='/' title={home} aria-label={home}>
        <Logo />
      </S.LogoLink>
    </S.MenuWrapper>
  )
}
