import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home" className='fs-3 text-light'>
            <i className="fa-solid fa-layer-group fa-beat me-2"></i>
            BookKeeper
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
