import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Aayush, a full-stack developer living in Lucknow, India.</h2>
        <p>
          Need a developer? <Link to="/contact">Click here</Link>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
