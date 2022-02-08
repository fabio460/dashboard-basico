import './App.css'
import SideBar from './materialUI/SideBar/SideBar';

import Header from './materialUI/Header/Header';
import Home from './paginas/home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './paginas/users/Users';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
      
      <div className='section'>
          <div className='appLeft'>
          <SideBar />
          </div>
          <div className='appRight'>
              
              <Link to={'/users'}></Link>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <Users/>
                </Route>
              </Switch>
          
          </div>  
      </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
