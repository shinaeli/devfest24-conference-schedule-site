import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container">
        <h1 className="dosis-bold error-main-title">Oops!</h1>
        <h3 className="dosis-semibold error-sub-title">404 - PAGE NOT FOUND</h3>
        <p className="dosis-regular error-text">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <Link className="dosis-semibold back-to-home" to="/">Go To Homepage</Link>
    </div>
  )
}

export default ErrorPage