import React from "react"
import Layout from "../components/layout"

import { graphql, useStaticQuery, Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDatetime, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDatetime(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  let blogs = data.allContentfulBlogPost.edges

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {blogs.map(edge => {
            return (
              <li>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                </Link>
                <p>{edge.node.publishedDatetime}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
