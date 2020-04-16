import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>My bio</p>
        <p>
          Need a developer? <Link to="/contact">Click here</Link>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
