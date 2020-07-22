import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github finder',
    icon: 'fab fa-github',
    homeicon: 'fas fa-clinic-medical',
    feature: 'fas fa-user-astronaut',
    pricing: 'fas fa-dollar-sign',
    contact: 'far fa-address-book',
  };

  render() {
    return (
      <div className='container'>
        <nav className='navbar navbar-expand-md navbar-light bg-dark'>
          <h1>
            <i className={this.props.icon} />
            {this.props.title}
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
