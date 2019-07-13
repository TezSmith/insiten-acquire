import React from 'react'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div>
     <Link to='/'> Home </Link>
     <Link to='/Portfolio'> Portfolio </Link>
    </div>
  )
}

export default withRouter(connect()(Navbar))
