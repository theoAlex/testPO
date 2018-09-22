import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import { withPrefix } from  'gatsby-link'

import AFDLogo from '../img/AFD.png'
import FDPLogo from '../img/FDP.png'
import CSULogo from '../img/CSU.png'
import CDULogo from '../img/CDU.png'
import GruenenLogo from '../img/Gruenen.png'
import SPDLogo from '../img/SPD.png'
import LinkeLogo from '../img/Linke.png'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPartei: 'Observer',
      btnHoverFillOpacity: 0,
      btnHoverEnabled: true
    }
    this.handleParteiWahl = this.handleParteiWahl.bind(this)
    this.renderParteiLogo = this.renderParteiLogo.bind(this)
  }

  handleParteiWahl(e) {
      this.setState({btnHoverEnabled: false})
      setTimeout(() => {
        this.setState({btnHoverEnabled: true})
      }, 1000)
      
    if(e.target.classList[0].split('-')[0] !== this.state.selectedPartei) {

      // set body scroll
      if(this.state.selectedPartei === 'Observer') {
          document.getElementsByTagName('BODY')[0].style.height = '100vh'
        // setTimeout(() => {
        // })
      }

      // disable btnHoverListener
      if(this.state.selectedPartei !== 'Observer') {
        document.querySelector(`.${this.state.selectedPartei}-logo`).style.visibility = 'hidden'
        document.querySelector(`.${this.state.selectedPartei}-btn`).style.fillOpacity = 0.4
      }

      this.setState({selectedPartei: e.target.classList[0].split('-')[0]}, () => {
        document.querySelector(`.${e.target.classList[0].split('-')[0]}-logo`).style.visibility = 'visible'
      })
    }

    // console.log(e.target.classList.contains('partei-wahl-btn'))
  }

  renderParteiLogo(e) {
    if(this.state.btnHoverEnabled && this.state.selectedPartei !== e.target.classList[0].split('-')[0]) {
      let logo = document.querySelector(`.${e.target.classList[0].split('-')[0]}-logo`)
      if(e.type === 'mouseover') {
        logo.style.visibility = 'visible'
        e.target.style.fillOpacity = 0.75
      }
      if(e.type === 'mouseout') {
        logo.style.visibility = 'hidden'
        e.target.style.fillOpacity = 0.4
      }
    }
  }

  componentDidMount() {
    document.getElementsByTagName('BODY')[0].style.height = 'auto'
    let btnPaths = document.querySelectorAll('.partei-wahl-btns-svg > a > path')
    btnPaths.forEach(btnPath => {
      btnPath.addEventListener('click', this.handleParteiWahl)
      btnPath.addEventListener('mouseover', this.renderParteiLogo)
      btnPath.addEventListener('mouseout', this.renderParteiLogo)
    })
  }

  do(e) {
    // console.log(e.target.id)
    let b = document.getElementsByTagName('BODY')[0]
    b.scrollTop = 1900
  }

  render() {
    // console.log(this.props.data)\
    const { data } = this.props
    // console.log(this.props.data.articles.edges)
    let posts = data.articles.edges.filter(post => {
      return post.node.frontmatter.tags.includes(this.state.selectedPartei)
    })
    posts = posts.slice(0, 3)
    return (
      <Layout>
        <section style={{ position: 'relative', height: '220vh' }} className="section landingPage">
        <Img fixed={data.background.childImageSharp.fixed} style={{ position: 'absolute', top: '0', left: '0' }} />
          <div style={{ width: '213px', height: '134px', position: 'absolute', top: '224px', left: '840px' }}>
            <img src={AFDLogo} style={{ visibility: 'hidden', position: 'absolute' }} className="AFD-logo" alt=""/>
            <img src={FDPLogo} style={{ visibility: 'hidden', position: 'absolute' }} className="FDP-logo" alt=""/>
            <img src={CSULogo} style={{ visibility: 'hidden', position: 'absolute' }} className="CSU-logo" alt=""/>
            <img src={CDULogo} style={{ visibility: 'hidden', position: 'absolute' }} className="CDU-logo" alt=""/>
            <img src={GruenenLogo} style={{ visibility: 'hidden', position: 'absolute' }} className="GRUENEN-logo" alt=""/>
            <img src={SPDLogo} style={{ visibility: 'hidden', position: 'absolute' }} className="SPD-logo" alt=""/>
            <img src={LinkeLogo} style={{ visibility: 'hidden', position: 'absolute' }} className="LINKE-logo" alt=""/>
          </div>
            <div className="partei-wahl-btns" style={{ position: 'absolute', width: '1435px', height: '688px', top: '129px', left: '232px', opacity: '0.8' }}>
              <svg className="partei-wahl-btns-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369 178">
              <a href="#list-container" className="partei-wahl-btn AFD">
              <path className="AFD-btn"
              d="M139.321,26.852c-2.275,4.249 -3.528,8.89 -3.528,13.749c0,1.678 0.149,3.33 0.438,4.949l-129.819,27.74c-3.74,-10.947 -5.729,-22.417 -5.729,-34.233c0,-13.277 2.511,-26.117 7.196,-38.268l131.442,26.063Z"/>
              </a>
              <a href="#list-container" className="partei-wahl-btn FDP">
              <path className="FDP-btn"
              d="M136.867,48.307c1.35,4.765 3.926,9.191 7.467,13.08l-101.925,65.036c-16.014,-14.608 -28.099,-31.727 -35.039,-50.444l129.497,-27.672Z"/>
              </a>
              <a href="#list-container" className="partei-wahl-btn CSU">
              <path className="CSU-btn"
              d="M146.543 63.627c6.311 5.921 15.001 10.347 24.975 12.453l-31.985 96.567c-37.465-7.059-70.376-22.755-94.742-44.095l101.752-64.925z"/>
              </a>
              <a href="#list-container" className="partei-wahl-btn CDU">
              <path className="CDU-btn"
              d="M201.785 75.156l41.484 94.391c-18.489 4.695-38.295 7.241-58.888 7.241-14.181 0-27.989-1.208-41.251-3.493l31.985-96.565c3.12.47 6.346.716 9.649.716 5.984 0 11.718-.809 17.021-2.29z"/>
              </a>
              <a href="#list-container" className="partei-wahl-btn GRUENEN">
              <path className="GRUENEN-btn"
              d="M217.226,68.179l81.245,78.798c-15.42,9.179 -32.849,16.541 -51.709,21.653l-41.552,-94.544c4.395,-1.523 8.439,-3.521 12.016,-5.907Z"/>
              </a>
              <a href="#list-container" className="partei-wahl-btn SPD">
              <path className="SPD-btn"
              d="M233.605,43.309l132.498,15.996c-6.777,34.426 -30.569,64.722 -64.754,85.924l-81.435,-78.984c7.771,-6.028 12.831,-14.047 13.691,-22.936Z"/>
              </a>
              <a href="#list-container" className="partei-wahl-btn LINKE">
              <path className="LINKE-btn"
              d="M230.554,27.519l130.643,-25.905c4.483,11.907 6.881,24.467 6.881,37.443c0,5.924 -0.5,11.762 -1.47,17.49l-132.873,-16.041c-0.015,-4.571 -1.14,-8.949 -3.181,-12.987Z"/>
              </a>
              </svg>
            </div>  
          <div className="list-wrapper" style={{ width: '100vw', position: 'absolute', bottom: '0px', paddingTop: '200px' }}>
            <div id="list-container" className="container" style={{  margin: '0 auto', width: '1344px', height: '100vh', paddingTop: '100px' }}>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ 
                    border: '1px solid #eaecee', 
                    padding: '2em 4em', 
                    background: 'white',
                    display: 'grid',
                    gridTemplateColumns: '320 auto'
                  }}
                  key={post.id}
                >
                  <p>
                    <a className="has-text-primary" href={post.fields.slug}>
                      {post.frontmatter.title}
                    </a>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <a className="button is-small" href={post.fields.slug}>
                      Keep Reading →
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query{
    articles:
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { tags: { in: "Observer" } }},
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              tags
              coverimg
            }
          }
        }
      }
    background:
      file(relativePath: { regex: "/^bg.jpg$/" }) {
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

/*
      <Img fixed={data.background.childImageSharp.fixed} style={{ height: 'auto', width: '100vw', position: 'absolute', margin: '0 auto' }}/>




      <section style={{ position: 'relative', height: '200vh', backgroundImage: `url(${bg})`, 'backgroundSize': '100vw auto', 'backgroundPosition': 'center' }} className="section landingPage">

        <div  style={{ margin: '400px auto', width: '1062px', zIndex: '1' }}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', bottom: '324px', left: '-193px', display: 'none' }} width="543" viewBox="0 0 140 74">
            <a xlinkHref="#artikel-liste" className="partei-wahl-btn AFD">
              <path className="AFD-btn" fill="#0192ff"
              d="M139.321,26.852c-2.275,4.249 -3.528,8.89 -3.528,13.749c0,1.678 0.149,3.33 0.438,4.949l-129.819,27.74c-3.74,-10.947 -5.729,-22.417 -5.729,-34.233c0,-13.277 2.511,-26.117 7.196,-38.268l131.442,26.063Z"/>
            </a>
          </svg>
          <svg style={{ position: 'relative', bottom: '550px', right: '165px', zIndex: '0', display: 'none' }} xmlns="http://www.w3.org/2000/svg" width="535" viewBox="0 0 138 79">
            <a xlinkHref="#artikel-liste" className="partei-wahl-btn FDP">
              <path className="FDP-btn" 
              d="M129.867,0.307c1.35,4.765 3.926,9.191 7.467,13.08l-101.925,65.036c-16.014,-14.608 -28.099,-31.727 -35.039,-50.444l129.497,-27.672Z"/>
            </a>
          </svg>
          <a style={{ position: 'relative', top: '-371px', right: '557px', display: 'none' }} href="#artikel-liste" className="partei-wahl-btn CSU">
            <svg xmlns="http://www.w3.org/2000/svg" width="495" viewBox="0 0 128 110">
              <path className="CSU-btn" 
              d="M102.543,0.627c6.311,5.921 15.001,10.347 24.975,12.453l-31.985,96.567c-37.465,-7.059 -70.376,-22.755 -94.742,-44.095l101.752,-64.925Z"/>
            </svg>
          </a>
          <a style={{ position: 'relative', bottom: '759px', left: '362px', display: 'none' }} href="#artikel-liste" className="partei-wahl-btn CDU">
            <svg xmlns="http://www.w3.org/2000/svg" height="397" viewBox="0 0 102 104">
              <path className="CDU-btn" 
              d="M59.785,1.156l41.484,94.391c-18.489,4.695 -38.295,7.241 -58.888,7.241c-14.181,0 -27.989,-1.208 -41.251,-3.493l31.985,-96.565c3.12,0.47 6.346,0.716 9.649,0.716c5.984,0 11.718,-0.809 17.021,-2.29Z"/>
            </svg>
          </a>
          <a style={{ position: 'relative', bottom: '788px', left: '214px', display: 'none' }} href="#artikel-liste" className="partei-wahl-btn gruene">
            <svg xmlns="http://www.w3.org/2000/svg" height="396" viewBox="0 0 95 102">
              <path className="GRUENE-btn" 
              d="M13.226,1.179l81.245,78.798c-15.42,9.179 -32.849,16.541 -51.709,21.653l-41.552,-94.544c4.395,-1.523 8.439,-3.521 12.016,-5.907Z"/>
            </svg>
          </a>
          <a style={{ position: 'relative', bottom: '1284px', left: '662px', display: 'none' }} href="#artikel-liste" className="partei-wahl-btn SPD">
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" width="571" viewBox="0 0 148 103">
              <path className="SPD-btn" 
              d="M14.605,0.309l132.498,15.996c-6.777,34.426 -30.569,64.722 -64.754,85.924l-81.435,-78.984c7.771,-6.028 12.831,-14.047 13.691,-22.936Z"/>
            </svg>
          </a>
          <a style={{ position: 'relative', bottom: '1850px', right: '-704px', display: 'none' }} href="#artikel-liste" className="partei-wahl-btn linke">
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41421" clip-rule="evenodd" width="537" viewBox="0 0 139 56">
              <path className="LINKE-btn" 
              d="M0.554,26.519l130.643,-25.905c4.483,11.907 6.881,24.467 6.881,37.443c0,5.924 -0.5,11.762 -1.47,17.49l-132.873,-16.041c-0.015,-4.571 -1.14,-8.949 -3.181,-12.987Z"/>
            </svg>
          </a>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em', background: 'white' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}

{{posts.map(({ node: post }) => (
              <div>{{post.id}}</div>
            ))}}

*/
