import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar fixed="bottom" bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
            </React.Fragment>
        )
    }
}


export default Footer 
