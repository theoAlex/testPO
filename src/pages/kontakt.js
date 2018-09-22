import React from 'react'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'




export default class PolitikUndGesellschaft extends React.Component {

  componentDidMount() {
    document.getElementsByTagName('BODY')[0].style.overflowY = 'hidden'
  }

  render() {
    const { data } = this.props

    return (
      <Layout>
        <section>
          <div className="list-wrapper" style={{ position: 'relative', height: 'calc(100vh - 56px)', color: '#f0f0f0' }}>
        <Img fixed={data.background.childImageSharp.fixed} style={{ position: 'absolute', top: '0', left: '0', width: '1920px', zIndex: '-1', height: '1300px' }} />
            <div id="artikel-liste" className="container" style={{  margin: '0 auto', width: '1344px', paddingTop: '50px' }}>
              <div style={{ fontSize: '5rem', width: '615px', margin: '0 auto' }} className="contact-heading">Schreiben Sie uns!</div>
              <form style={{ width: '500px', margin: '0 auto', paddingTop: '30px', display: 'grid', gridTemplateRows: '30px 30px 30px 30px 50px' }} name="contact" method="post" netlify netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name</label>
                <input  style={{ width: '500px', margin: '0 auto', display: 'block', height: '2.3rem' }} type="text" name="name"/>
                <br/>
                <label htmlFor="email">E-mail</label>
                <input style={{ width: '500px', margin: '0 auto', display: 'block', height: '2.3rem' }} type="text"/>
                <br/>
                <label style={{ marginTop: '3px' }} htmlFor="nachricht">Nachricht</label>
                <textarea style={{ width: '500px', margin: '0 auto', display: 'block', resize: 'none' }} name="nachricht" id="" cols="30" rows="10"></textarea>
                <button style={{ width: '70px', justifySelf: 'end', marginTop: '10px' }} type="submit">Senden</button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query{
    background:
      file(relativePath: { regex: "/^contact-bg-v1-77.jpg$/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`