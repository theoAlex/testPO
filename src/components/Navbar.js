import React from 'react'

import twitter from '../img/icon-twitter.svg'
import logo from '../img/lupev6.svg'
//  font fam:
//  Rubik, weight 500, 1.2rem

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar" 
      style={{ 
        width: '100vw', 
        backgroundColor: '#232323', 
        height: '56px' 
        // position:'relative', 
      }}>
        <div
        style={{ 
          width: '100%', 
          display: 'flex', 
          margin: '0 40px 0 auto',
          position: 'relative'
          // alignItems: 'stretch', 
          // minHeight: '3.25rem', 
        }}>
          <div 
          style={{ 
            // marginLeft: '-1rem', 
            // alignItems: 'stretch', 
            // display: 'flex', 
            // flexShrink: '0', 
            // minHeight: '3.25rem' 
          }}>
            <a href="/">
              <img src={logo} alt="logo" 
              style={{ 
                width: '88px', 
                height: '42px', 
                marginTop: '8px' 
              }}/>
            </a>
          </div>
          <div className="navbar-start" 
          style={{ 
            position:'absolute', 
            right: '250px', 
            height: '100%', 
            // color: '#ccc',
            // justifyContent: 'flex-start',
            // marginRight: 'auto',
            // alignItems: 'stretch',
            // display: 'flex' 
          }}>
            <a className="nav" href="/">
              Observer
            </a>
            <a className="nav" href="/politikundgesellschaft">
              Politik & Gesellschaft
            </a>
            <a className="nav" href="/ueberuns">
              Über uns
            </a>
            <a className="nav" href="/kontakt">
              Kontakt
            </a>
          </div>
          <div style={{ justifyContent: 'flex-end', marginLeft: 'auto', alignItems: 'stretch', display: 'flex' }}>
            <a
              href="https://twitter.com/parlobserv"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                cursor: 'pointer',
                // display: 'flex',
                // alignItems: 'center',
                // flexGrow: '0',
                // flexShrink: '0',
                // lineHeight: '1.5',
                // position: 'relative',
                // padding: '0.5rem 0.75rem',
               }}
            >
              <span
              style={{ 
                alignItems: 'center',
                display: 'inline-flex',
                justifyContent: 'center',
                height: '1.5rem',
                width: '88px',
              }}>
                <img src={twitter} alt="Github" style={{ 
                  marginTop: '30px',
                  height: '28px',
                  maxWidth: '100%'
                }} />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}