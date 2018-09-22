import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import format from 'date-fns/format'
import deLocale from 'date-fns/locale/de'
import Layout from "../components/Layout"


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Layout>
      <section className="section">
        {helmet || ''}
        <div style={{ width: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.3em', fontWeight: 'normal', fontFamily: 'Merriweather', width: 'auto', textAlign: 'center', marginBottom: '20px' }}>
            {title}
          </h1>
          <hr style={{ width: '50%', margin: '0px auto 30px auto' }}/>
          <div style={{ color: '#888', fontFamily: 'Source Sans Pro', display: 'grid', gridTemplateColumns: '50% 50%', width: '60%', margin: '0 auto' }}>
            <span style={{ alignSelf: 'center', fontSize: '1.1em' }}>
              {format(date, 'D[.] MMMM YYYY', {locale: deLocale})}
            </span>
            <div style={{ marginBottom: '10px',  justifySelf: 'end' }}>      
            {tags.map(tag => (
              <Link 
                style={{ 
                  background: '#0000000d', 
                  color: '#000000ad', 
                  padding: '5px 10px',
                  margin: '0 10px',
                  borderRadius: '2px' }} 
                to={`/tags/${kebabCase(tag)}`}
              >
              {tag}
              </Link>
            ))}
            </div>
          </div>
          <PostContent content={content} className="post-content" />
        </div>
      </section>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
