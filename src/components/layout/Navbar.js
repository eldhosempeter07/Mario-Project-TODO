import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import projectReducer from '../../store/reducers/ProjectReducer'

const Navbar=(props)=> {
   // console.log(props)
    const{auth,profile}=props
    const links=auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className='container'>
            <Link to='/' className='brand-logo'>MarioPlan</Link>
            {/* {auth.isLoaded && links } // APPROCH INSTEAD OF useSelector() IN INDEX.JS */}  
            {links}
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default 
    connect(mapStateToProps)( Navbar)
