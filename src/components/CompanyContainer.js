import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'
import CompanyDetails from './CompanyDetails'
import { throwStatement } from '@babel/types';

class CompanyContainer extends Component {

    state = {
        company: ''
    }

    showCard = (c) => {
        this.setState({
            company: c
        })
    }

    removeCard = () => {
       this.setState({
           company: ''
       })
    }

    render() {
        const { companies } = this.props.companies
        return (
            <div>
                {this.state.company ? <CompanyDetails c={this.state.company} back={this.removeCard} />
                    : companies.map(c => <CompanyCard c={c} idx={c.id} key={c.id} show={this.showCard} />)
               }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        companies: { ...state.company }
    }
}

export default connect(mapStateToProps)(CompanyContainer)