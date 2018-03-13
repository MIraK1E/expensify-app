import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

// destructor some prop and get the rest of props
export const PrivateRoute = ({ isAuthenticated, component: Component, ...props }) => (
    // pass all prop to route and function that return some jsx
    <Route { ...props } component = {(props) => (
        //check isAuthenticated if auth render component with all prop
        // else render component Redirect
        isAuthenticated ? (
            <div>
                <Header/>
                <Component {...props} />
            </div>
        ) : ( 
        <Redirect to="/" /> )
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)