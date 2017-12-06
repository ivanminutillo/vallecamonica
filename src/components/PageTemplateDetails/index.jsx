import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class PageTemplateDetails extends React.Component {
  render () {
    let backgroundImage
    const page = this.props.data.markdownRemark
    if (page.frontmatter.image === 'tools') {
      backgroundImage = 'tools'
    }
    return (
      <div>
        <div className="content">
          <div className="page">
            <div className={"page_header " + backgroundImage}>
              <h1 className="page_title">{page.frontmatter.title}</h1>
            </div>
            <div className="page_body" dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </div>
      </div>
    )
  }
}

PageTemplateDetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired
  })
}

export default PageTemplateDetails
