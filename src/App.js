import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import BarNav from "./components/BarNav";
import Footer from "./components/Footer";
import HeroeDetail from "./pages/HeroeDetail";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <BarNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/heroe/:id">
            <HeroeDetail />
          </Route>
          <Route path="/search">
            <Search />
          </Route>

          {/* <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/history">
            <History />
          </Route>

          <Route path="*">
            <Error404 />
          </Route> */}

        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
