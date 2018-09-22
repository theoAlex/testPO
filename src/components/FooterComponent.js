import React from 'react'
import Link from 'gatsby-link'

import twitter from '../img/icon-twitter.svg'
import logo from '../img/parlobslogwhite.svg'


export default class FooterComponent extends React.Component {

  render() {
    return (
      <footer 
      style={{
        height: '400px', 
        width: '100%', 
        background: '#232323',
        padding: '30px 6% 20px 6%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33.33%)',
        gridTemplateRows: '76% 24%',
        zIndex: '1',
        borderTop: '1px solid #2d2d2d'
      }}>
      <div style={{ width: '600px' }}> 
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '30px auto' }}>
          <Link to="#" style={{ fontWeight: "bold", fontSize: '1.4em' }}>Observer</Link>
          <Link to="#">AFD</Link>
          <Link to="#">FDP</Link>
          <Link to="#">CSU</Link>
          <Link to="#">CDU</Link>
          <Link to="#">Die Grünen</Link>
          <Link to="#">SPD</Link>
          <Link to="#">Die Linke</Link>
        </div>
      </div>
        <Link to="/" style={{ width: '300px', height: '111px', padding: '0', margin: '60px auto' }}>
          <img src={logo} alt="logo" style={{ width: 'auto', height: 'auto' }} />
        </Link>
          <form style={{ width: '500px', paddingTop: '0px', display: 'grid', gridTemplateRows: '50px 35px 110px' }} name="contact" method="post" netlify netlify-honeypot="bot-field">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>  
              <span style={{ fontSize: '2em' }}>
                Schreiben Sie uns!
              </span>
              <button type="submit" style={{ color: '000000aa', fontFamily: 'Poppins', fontSize: '1.001em', cursor: 'pointer', height: '33px', width: '100px', background: 'orange', border: '1px solid #444', borderLeft: '0', position: 'relative', top: '8px' }}>Senden</button>
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <input  style={{ width: '200px', margin: '0 auto', display: 'inline', height: '2.3rem', padding: '0.4rem', marginRight: '10px' }} type="text" name="name" placeholder="Name"/>
              <input style={{ width: '290px', margin: '0 auto', display: 'inline', height: '2.3rem', padding: '0.4rem' }} type="text" placeholder="E-mail"/>
            </div>
            <textarea style={{ width: '500px', margin: '10px auto 0 auto', display: 'block', resize: 'none', height: 'auto', padding: '0.5rem 0.4rem' }} name="nachricht" id="" cols="30" rows="10" placeholder="Ihre Nachricht..."></textarea>
          </form>
        <div style={{ borderTop: '1px solid #555', gridColumn: '1/4', width: '90%', margin: '0 auto', paddingTop: '10px' }}>
          <div style={{ width: '531px', margin: '0 auto', display: 'grid', gridTemplateColumns: '531px minmax(20px, auto) 50px', gridTemplateRows: '50px' }}>  
          <span>
            <a href="/politikundgesellschaft">Politik & Gesellschaft</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="ueberuns">Über uns</a> 
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="/">Impressum</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="/">Datenschutz</a>
          </span>
          <span></span>
          <a
            href="https://twitter.com/parlobserv"
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'relative', left: '430px' }}
          >
            <span>
              <img  style={{ height: '25px' }} src={twitter} alt="Github" />
            </span>
          </a>
          </div>
        </div>
      </footer>
    )
  }
}
