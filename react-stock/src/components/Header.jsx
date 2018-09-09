import React from 'react';

function Header(props) {
  const { links } = props;
  return (

    <div className="hero is-dark is-bold">
      
      <img className="bgimg" src={require("../img/bg3.jpg")} alt="bgimg" />
      <div className="container-nav tabs is-centered">
        {links.map(link => {
          return <div
            key={link}
            className="link"
            onClick={() => props.onClick(link)}
          >{link}</div>
        })}
      </div>
    </div>
  );
}

export default Header;
