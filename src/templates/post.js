import React from 'react'
import { graphql, Link } from 'gatsby'
import TitlePage from '../components/TitlePage'
import DescriptionPage from '../components/DescriptionPage'
import SEO from '../components/seo'

import * as S from '../components/Content/styled'

import { PostDate } from '../styles/base'
import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack'

const Post = props => {
  const post = props.data.markdownRemark

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <Link to="/" styles={{ marginBottom: '40px', display: 'block' }}><ArrowBack size="34" /></Link>
      <PostDate>
        {post.frontmatter.date} • {post.timeToRead} min de leitura
      </PostDate>
      <TitlePage text={post.frontmatter.title} />
      <DescriptionPage text={post.frontmatter.description} />
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.Content>
    </>
  )
}

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
      }
      html
      timeToRead
    }
  }
`

export default Post
