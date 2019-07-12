import React from 'react'
import { connect } from 'react-redux'

const CompanyDetails = (props) => {
    const { details, back } = props
    return (
        <div>
            <h1>{details.firstname}</h1>
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