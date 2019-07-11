import React from 'react'

const CompanyDetails = (props) => {
    const { c } = props
    return (
        <div>
            <h1>{c.name}</h1>
        </div>
    )
}

export default CompanyDetails