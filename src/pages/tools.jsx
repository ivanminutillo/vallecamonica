import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import { translate } from 'react-i18next'

class ToolsRoute extends React.Component {
  render () {
    const { t } = this.props
    const { title, menu, author } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>{`${title}`}</title>
          <meta name="description" />
        </Helmet>
        <Header
          menu={menu}
          social={author}
        />
        <Intro image={'tools'} title={'FairCoop Tools'} />
        <div className='page_tools'>
            <div className='body_tools'>
                <div className='tools_item'>
                    <h2>{t("tools.faircoin.title")}</h2>
                    <p>{t("tools.faircoin.description")}</p>
                    <a href='#'>Go to FairCoin website</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.fairpay.title")}</h2>
                    <p>{t("tools.fairpay.description")}</p>
                    <a href='#'>Go to FairPay</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.fairfund.title")}</h2>
                    <p>{t("tools.fairfund.description")}</p>
                    <a href='#'>Go to FairFund</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.usefaircoin.title")}</h2>
                    <p>{t("tools.usefaircoin.description")}</p>
                    <a href='#'>Go to useFairCoin</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.getfaircoin.title")}</h2>
                    <p>{t("tools.getfaircoin.description")}</p>
                    <a href='#'>Go to getFaircoin</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.fairsaving.title")}</h2>
                    <p>{t("tools.fairsaving.description")}</p>
                    <a href='#'>Go to FairSaving</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.ocp.title")}</h2>
                    <p>{t("tools.ocp.description")}</p>
                    <a href='#'>Go to OCP</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.freedomcoop.title")}</h2>
                    <p>{t("tools.freedomcoop.description")}</p>
                    <a href='#'>Go to FreedomCoop</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.fairmarket.title")}</h2>
                    <p>{t("tools.fairmarket.description")}</p>
                    <a href='#'>Go to FairMarket</a>
                </div>
                <div className='tools_item'>
                    <h2>{t("tools.bankofthecommons.title")}</h2>
                    <p>{t("tools.bankofthecommons.description")}</p>
                    <a href='#'>Go to BankoftheCommons</a>
                </div>
            </div>
        </div>
        <Footer
          menu={menu}
          social={author}
        />
      </div>
    );
  }
}

export default translate('translations')(ToolsRoute)

export const pageQuery = graphql`
query ToolsQuery {
  site {
    siteMetadata {
      title
      subtitle
      copyright
      menu {
        label
        path
      }
      author {
        name
        email
        telegram
        twitter
        github
      }
    }
  }
}
`
