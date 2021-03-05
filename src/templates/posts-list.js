import React from 'react'
import { graphql, Link } from 'gatsby'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import useTranslations from '../components/useTranslations'

import Pagination from '../components/Pagination'

import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack'

import * as S from '../components/ListWrapper/styled'

const Blog = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { allPosts } = useTranslations()

  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <>
      <SEO title='Blog' />
      <TitlePage>{allPosts}</TitlePage>
      <Link to="/" style={{ marginBottom: '40px', display: 'block' }}><ArrowBack size="34" /></Link>

      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                image
              },
              timeToRead,
              fields: { slug }
            }
          }) => (
            <PostItem
              key={title}
              slug={`/blog/${slug}`}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={image}
            />
          )
        )}
      </S.ListWrapper>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}

export const query = graphql`
  query PostsList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: { 
        fields: { locale: { eq: $locale } } 
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      limit: $limit
      skip: $skip
    ){
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`

export default Blog
