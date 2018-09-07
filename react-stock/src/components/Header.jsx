import React from 'react';

function Header(props) {
  const { links } = props;
  return (

    <div className="hero is-medium tabs is-dark is-bold">
    <img className="bgimg" src={require("../img/bg2.jpg")} alt="bgimg"/>
        {links.map(link => {
          return <div 
            key={link}
            className="link" 
            onClick={() => props.onClick(link)}
          >{link}</div>
        })}
    </div>
  );
}

export default Header;
