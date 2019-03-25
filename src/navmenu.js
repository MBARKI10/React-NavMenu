import React, {Component} from 'react';
import{Link} from 'react-router-dom'




class NavMenu extends Component {
    render() {
      return (
        <div>
        <Link to='/home' className="use">Home</Link>
        <Link to='/service' className="use">Service</Link>
        <Link to='/contact' className="use">Contact</Link>
        </div>
      );
    }
  }

  

export default  NavMenu
