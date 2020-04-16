import React from "react"

import Header from "./header"
import Footer from "./footer"
import Head from "./head"

import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Head />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
