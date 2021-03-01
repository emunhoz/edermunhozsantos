import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../useTranslations'

import * as S from './styled'

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description
}) => {
  const { toRead } = useTranslations()

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDate>{date} • ☕️  {timeToRead} min {toRead}</S.PostItemDate>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemDescription>{description}</S.PostItemDescription>
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
