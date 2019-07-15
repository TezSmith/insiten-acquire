import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 bg-white border-bottom shadow-sm">
      <nav className="my-2">
        <Link to='/'> Home </Link>
        <Link to='/companies'> Companies </Link>
        <Link to='/portfolio'> Portfolio </Link>
      </nav>
    </div>
  )
}

export default withRouter(connect()(Navbar))
