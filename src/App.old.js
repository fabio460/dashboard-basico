import Home from "./paginas/home/Home";
import Users from "./paginas/users/Users";
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import TopBar from "./componentes/topBar/TopBar";
import SideBar from "./componentes/sideBar/SideBar";
function App() {
  return (
    <div className="App">
      <SideBar className='sideBar'/>
      <section>
        <TopBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
