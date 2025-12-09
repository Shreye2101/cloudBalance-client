import { Navigate } from "react-router-dom"
import React from "react"

function Protected({element}){
   
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    if(!email || !password){
        return <Navigate to='/' replace/>
    }
    return element
}

export default Protected