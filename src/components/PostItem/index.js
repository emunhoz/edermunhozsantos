import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import useTranslations from '../useTranslations'
import { Label } from 'styled-icons/boxicons-solid/Label'

import * as S from './styled'

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  image
}) => {
  const { toRead } = useTranslations()

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemInfo>
          <S.PostItemTag background={background}>
            <Label /> {category}
          </S.PostItemTag>
          <S.PostItemDate>
            {date} • {timeToRead} min {toRead}
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
