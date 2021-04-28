import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({ data }) => {
  const { 
    allAirtable: { nodes: projects },
} = data
  return (
    <Layout>
      <Hero projects={projects}/>
      <About/>
      <Projects projects={projects} title="services" />
     
    </Layout>
  )
}


export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 3, sort: {fields: data___date, order: ASC}) {
      nodes {
        id
        data {
          Name
          date
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
