import React from 'react'
import { withPrefix } from  'gatsby-link'
import { graphql } from "gatsby"
import format from 'date-fns/format'
import deLocale from 'date-fns/locale/de'
import Layout from "../components/Layout"
import { kebabCase } from 'lodash'


export default class politikUndGesellschaft extends React.Component {

  componentDidMount() {
     
  }

  render() {    
  // or #f0f0f0
  // padding: '2em 4em'

  let posts = this.props.data.allMarkdownRemark.edges
  console.log(posts)
    return (
      <Layout>
        <div style={{ backgroundColor: '#f0f0f0', height: '2250px', position: 'relative',  paddingTop: '50px' }}>
          <div className="PUG-article-list" style={{ width: '75%', margin: '0 auto', border: '1px solid #eaecee', height: 'auto' }}>
            {posts.map(({ node: post }) => (
              <div
                style={{ 
                  padding: '2em 0.1em 2em 2em', 
                  display: 'grid', 
                  gridTemplateColumns: '350px auto', 
                  height: '300px', 
                  background: 'white' 
                }}
                key={post.id}
              >
                  <img src={withPrefix(post.frontmatter.coverimg)} alt="thumbnail" style={{ height: '100%', width: 'auto' }}/>
                  <div style={{ padding: '0 40px', display: 'grid', gridTemplateRows: 'auto 34px' }}>
                    <div>
                      <p style={{ fontSize: '2em' }}>This is a test Heading</p>
                      <p style={{ fontSize: '1em', marginTop: '20px', width: '80%' }}>
                      This is a test Paragraph Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Debitis eveniet quam cupiditate, laudantium beatae ad 
                      libero molestias nisi, pariatur deserunt!
                      </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '128px auto 100px' }}>
                      <a className="article-link" href={post.fields.slug}
                      >Weiterlesen&nbsp;&nbsp;→</a>
                      <div 
                      style={{  
                        display: 'flex',
                        flexDirection: 'row',
                        justifySelf: 'end',
                        paddingRight: '100px'
                      }}>
                        {post.frontmatter.tags.map(tag => (
                          <a 
                            style={{ 
                              background: '#0000000d', 
                              color: '#000000ad', 
                              padding: '5px 10px',
                              margin: '0 10px',
                              borderRadius: '2px' }} 
                            href={`/tags/${kebabCase(tag)}`}
                            key={tag}
                          >
                          {tag}
                          </a>                      
                        ))}

                      </div>
                      <span 
                      style={{ 
                        fontFamily: 'Titillium Web', 
                        fontSize: '1.3em', 
                        position: 'relative', 
                        top: '10px', 
                        // left: '60px' 
                    }}>{format(post.frontmatter.date, 'DD.MM.YYYY', {locale: deLocale})}</span>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { tags: { in: "PUG" } }}
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
  }
`

/*
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
*/