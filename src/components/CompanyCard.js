import React from 'react'

const CompanyCard = (props) => {
    const {c, show} = props
    return (
      <div>
        <h2>{c.name}</h2>
        <h4>{c.industry}</h4>
        <p>Location: {c.location.city},{c.location.state}<br/>{c.location.country}</p>
        <button onClick={() => show(c)}>See Details</button>
      </div>
    )
}

export default CompanyCard