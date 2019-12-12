import React, {useContext} from 'react';
//import './App.css';
import RouterContext from './contexts/RouterContext';

function Link(props) {

  const routerContext = useContext(RouterContext);

  function handleClick(e) {
    e.preventDefault();
    window.history.pushState({}, '', props.to);
    routerContext.setPath(props.to);
  }

  return (
    <a className="link"
      href={props.to}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};

  
export default Link;
