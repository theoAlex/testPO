import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class UeberUns extends React.Component {

  componentDidMount() {
    document.getElementsByTagName('BODY')[0].style.overflowY = 'visible'
    console.log(document.body.scrollHeight)

  }

  render() {
    const { data } = this.props

    return (
      <Layout>
        <div className="ueberUns" style={{ width: '100vw', height: '1300px', position: 'relative', paddingTop: '60px' }}>
        <Img fixed={data.background.childImageSharp.fixed} style={{ position: 'absolute', top: '0', left: '0', width: '1920px', zIndex: '-1', height: '1300px' }} />
          <div style={{ width: '60vw', height: '1160px', margin: '0 auto', background: 'white', border: '1px solid #ddd', textAlign: 'center' }}>
            <p style={{ width: '368px', margin: '60px auto 25px auto', fontStyle: 'italic' }}>
              “Politik ist langweilig und trocken”
              <br/> 
              “Warum soll ich mir Gedanken über Politik machen?”  
              <br/> 
              “Die da oben machen doch eh was sie wollen” 
            </p>
            <div className="body" style={{ width: '70%', margin: '40px auto', lineHeight: '1.8' }}>  
              <p>
                Diese Aussagen sind leider trotz politisch und gesellschaftlich bewegter Zeiten immer wieder zu hören. 
                Dies mag einerseits an einer immer komplexeren Verzahnung von Politik, Gesellschaft und Wirtschaft liegen. 
                Andererseits kann auch die Vielzahl an unterschiedlichen politischen Positionen, 
                Aussagen und sich verbreitender Populismus gespickt mit Fake News von Seiten der 
                parlamentarischen Politik und innerhalb der politischen Debatte, der Grund dafür sein.
              </p>
              <p style={{ marginBottom: '20px' }}>  
                Der Parlament Observer soll ein Informationsangebot für politisch interessierte und noch uninteressierte Menschen darstellen.
                Dazu wird das Handeln der politischen Parteien auf Bundesebene, sowie Regierungshandeln, unter die Lupe genommen. 
                Außerdem möchten wir in freien Texten über interessante und wichtige politische Themen und Sachverhalte berichten.
              </p>
              <hr style={{ width: '30%', margin: '0 auto 30px auto' }}/>
              <p>
                <p style={{ fontSize: '1.5em', marginBottom: '10px', color: '#4a4a4a' }}>Unser Angebot</p>
                <p style={{ textAlign: 'justify' }}>
                  Unter zwei Kategorien lässt sich unser komplettes Angebot abrufen: Observer und Politik & Gesellschaft. 
                  Beim Observer handelt es sich um die Möglichkeit in kurz gehaltenen Artikeln herauszufinden, was die Bundesregierung und Parteien im Bundestag “so treiben”. 
                  Politik & Gesellschaft hingegen bietet die Chance auf spannende Texte zu aktuellen politischen Thematiken in Form von freien Texten, Impulstexten oder Meinungskolumnen.
                </p>
              </p>
              <p>
                <p style={{ fontSize: '1.5em', marginBottom: '10px', color: '#4a4a4a' }}>Wer wir sind</p>
                Unser Team besteht aus vier Studenten. Uns alle verbindet der Willen über politisches besser 
                aufzuklären und eine Verbreitung der Kompetenz beurteilen zu können, was politisch passiert, wichtig ist und wie bestimmte Sachverhalte zu gewichten und einzuordnen sind.
                Kurz gesagt: Was passiert?, Warum passiert es? und Welche Gründe gibt es dafür?.
              </p>
              <p style={{ fontSize: '1.5em', marginBottom: '10px', color: '#4a4a4a' }}>Finanzierung</p>
                Unser Format verfügt aktuell über keine Art der Finanzierung. Weil wir aber auf lange Sicht wachsen möchten und einiges an Ideen für mehr Content haben, 
                wäre Unterstützung in Form von Spenden eine sehr große Hilfe. Alle Spender werden auf unserer Seite unter dem Reiter Unsere Helfer aufgeführt.
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query{
    background:
      file(relativePath: { regex: "/^uberunsbg.jpg$/" }) {
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