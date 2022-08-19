import { request, gql } from 'graphql-request'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerp
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  const result = await request(graphQLAPI, query)
  return result.postsConnection.edges
}

export const getPostDetails = async (slug) => {
  const query = gql`
  query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerp
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `
  const result = await request(graphQLAPI, query, { slug })
  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
      orderBy: createdAt_ASC, 
      last: 3
      ) {
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphQLAPI, query)
  return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND:{categories_some: {slug_in: $categories}}}
        last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphQLAPI, query, { categories, slug })
  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
    `

  const result = await request(graphQLAPI, query)
  return result.categories
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}
