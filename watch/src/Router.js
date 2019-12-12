import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './components/Timer';
import Watch from './components/Watch';
import RouterContext from './contexts/RouterContext';


function Router() {

  const [path, setPath] = useState(window.location.pathname);

  console.log(window);
  console.log(document);

  // here we ensure that navigation history button reload pages
  // history stack is handled by Link
  function addHistoryListener() {
    window.addEventListener('popstate', () => {
      setPath(window.location.pathname);
    });
  };

  // we wand to add the listener only when the component first mount
  // TODO: cleanup needed ?
  useEffect(addHistoryListener, []);

  const ROUTES = {
    '/': Watch,
    '/timer': Timer
  };

  function notFound() {
    return (
      <div>
        Not found
      </div>
    )
  };

  const Handler = ROUTES[path] || notFound;

  return (
      <RouterContext.Provider value={{setPath}}>
        <Handler />
      </RouterContext.Provider>
  );
};

export default Router;
