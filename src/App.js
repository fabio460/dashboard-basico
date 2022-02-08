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
import Login from './paginas/login/Login';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Link to='/login'></Link>
      
      
      <div className='section'>

 
              <Link to={'/users'}></Link>
              <Switch>
                <Route exact path="/">
                  <Header/>
                  <div className='container'>
                     
                      <div className='appLeft'>
                        <SideBar />
                      </div>
                      <div className='appRight'>   
                        <Home />
                      </div>
                  </div> 
                </Route>
                <Route path="/users">
                    <Header/>
                    <div className='container'>
                       
                          <div className='appLeft'>
                            <SideBar />
                          </div>
                          <div className='appRight'>   
                            <Users />
                          </div>
                      </div> 
                </Route>
                <Route>
                    <Login/>
                </Route>
              </Switch>
          
          
      </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
