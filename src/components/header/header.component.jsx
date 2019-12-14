import React from 'react'

import { ReactComponent as Logo } from '../../logo.svg'
import './header.styles.scss'

import * as Scroll from 'react-scroll'
let Link = Scroll.Link;

class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <div className='container' >
                    <div className='logo-container' to='/'>
                        <Logo className='logo' />
                    </div>
                    <div className='options'>
                        <Link className='option' 
                        to="headerSection" 
                            spy={true} 
                            smooth={true} 
                            duration={500} >
                            home
                        </Link>
                        <div className='option' >
                            about
                        </div>
                        <div className='option' >
                            Skills
                        </div>
                        
                    </div>    
                </div>
            </div>
    )}
} 


export default Header