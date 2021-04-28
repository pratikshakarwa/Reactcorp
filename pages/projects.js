import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia, Survey,Slider,} from "../components"

const ProjectsPage = ({ data }) => {
  const{
    allAirtable: { nodes:projects },

  } = data
  return(<Wrapper>
    <Layout>
      <Projects title="our services" projects={projects} page/>
      <Slider />
    </Layout>
  </Wrapper>
  ) 
}

const Wrapper = styled.main`
  min-height: 150vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-grey-5);
  }

`
export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 8, sort: {fields: data___date, order: ASC}) {
      nodes {
        id
        data {
          Name
          date
          type
           description
              LearnMore
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

export default ProjectsPage
