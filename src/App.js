import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="container w-4/5 mx-auto">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Meals />
          </Route>
          <Route path="/:MealID">
            <MealDetails />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
