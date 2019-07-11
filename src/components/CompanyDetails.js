import React from 'react'

const CompanyDetails = (props) => {
    const { c, back } = props
    return (
        <div>
            <h1>{c.name}</h1>
            <button onClick={back}> Back </button>
        </div>
    )
}

export default CompanyDetails