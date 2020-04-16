import React from "react"
import Layout from "../components/layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDatetime(formatString:"MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {

        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url

        return <img src={url} alt={alt} />

      }
    }
  }

  return (
    <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <h3>{props.data.contentfulBlogPost.publishedDatetime}</h3>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog
