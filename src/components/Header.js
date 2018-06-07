import React from 'react';

const Header = props => (
  <header style={{marginBotton: 10}}>
    <div>
      <span className="header"> {props.title} </span>
    </div>
  </header>   
)

export default Header;
