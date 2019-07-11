import React from 'react'

const CompanyCard = (props) => {
    const {c} = props
    return (
      <div>
        <h1>{c.name}</h1>
      </div>
    )
}

export default CompanyCard