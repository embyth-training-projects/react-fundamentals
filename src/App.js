import { Switch, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      <Route path="/new">
        <NewMeetupPage />
      </Route>
    </Switch>
  );
}

export default App;
