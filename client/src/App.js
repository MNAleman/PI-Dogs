import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";
import Landing from "./views/landing/Landing";
import Navbar from "./components/navbar/Navbar";


//import './App.css';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
          <Navbar path={"*"} component={Navbar} />
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route path={'/home'} component={Home}/>
          <Route path={'/detail'} component={Detail}/>
          <Route path={'/create'} component={Create}/>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
