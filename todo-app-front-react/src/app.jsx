import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'
import './template/custom.css'
import Menu from './template/menu'
import Routes from './main/routes'
// eslint-disable-next-line import/no-anonymous-default-export
export default props=>(
    <div className="container">
        <Menu/>
        <Routes/>
        

    </div>
)