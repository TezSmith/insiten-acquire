import React from 'react'
import { connect } from 'react-redux'

const CompanyDetails = (props) => {

    const { details, back } = props
    const showContent = () => {
    
    }

    return (
        <div>
            <h1>{details.coname}</h1>
            <h3>{details.industry}</h3>
            <p> Location: {details.hq}</p>
            <p> Founder: {details.ceo.firstname}</p>

            <button onClick={back}> Back </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { details } = state.company
    return {
        details: details
    }
}

export default connect(mapStateToProps)(CompanyDetails)
