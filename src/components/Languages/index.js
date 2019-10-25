import React from 'react'
import pt from '../../images/pt.svg'
import en from '../../images/en.svg'
import * as S from './styled'

const Languages = () => {
  return (
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageLink to='/' hrefLang='en'>
          <img src={en} alt='en' />
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to='/pt' hrefLang='pt'>
          <img src={pt} alt='pt' />
        </S.LanguageLink>
      </S.LanguageItem>
    </S.LanguageWrapper>
  )
}

export default Languages
