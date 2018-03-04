// Higher Order Component - A Component that render another component
// it a patern not thing fansy

import React from 'react'
import ReactDOM from 'react-dom'

// normal component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

// HOC that we use to set logic pass props that will make code canbe reuse
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please dont share!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticate ? <WrappedComponent {...props}/> : <p>please login to view info</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AuthInfo isAdmin={true} info="There are the detail" />,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticate={true} info="There are the detail"/>,document.getElementById('app'))