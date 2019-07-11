import React, { Component } from 'react'
import CompanyContainer from './CompanyContainer'
import Portfolio from './PortfolioContainer'

class Home extends Component {

    render() {
        return (
           <div>
            <CompanyContainer />
            {/*<Portfolio />*/}
           </div>
        )
    }

}


export default Home