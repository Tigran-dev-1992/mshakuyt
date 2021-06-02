import React, { useEffect} from 'react';
import Navigation from './Componentss/Navigation/Navigation';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './Componentss/content/HomePage/HomePage';
import Churches from './Componentss/content/Churches/Churches';
import Modale from './Commons/Modale';
import { useSelector } from 'react-redux';
import { modaleVizibleSelector } from './store/selectors/modaleSelector';
import Temples from './Componentss/content/Temples/Temples';
import Fortresses from './Componentss/content/Fortresses/Fortresses';
import Others from './Componentss/content/Other/Others';




function App() {
  useEffect(()=>{
    a()
  },[])
 function a(){
  if(document.documentElement.clientWidth<787){
    document.querySelector("body")?.classList.add("touch")
    document.querySelector("body")?.classList.remove("mouse")
  }else {
      document.querySelector("body")?.classList.add("mouse")
      document.querySelector("body")?.classList.remove("touch")
  }
 } 
 window.addEventListener("resize",a)
  
  const modaleVizible = useSelector(modaleVizibleSelector)
  return (
    <div className="app">
      {modaleVizible
        ? <div className="modal__container">
          <Modale />
        </div>
        : ""}
      <HashRouter>
        <div className="app__container sideContainer ">
          <Navigation />
          <div className="app__content">
            <Route exact path='/' render={() => <Redirect to={"/home"} />} />
            <Route path="/home" render={()=>HomePage()}/>
            <Route path="/church" render={() => <Churches />} />
            <Route path="/temple" render={() => <Temples />} />
            <Route path="/fortresse" render={() => <Fortresses />} />
            <Route path="/other" render={() => <Others/>} />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;


