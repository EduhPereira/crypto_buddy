import { Switch, Route } from "react-router";
import VoluntariesLogin from "../pages/voluntariesLogin";
import LandingPage from "../pages/landingPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>

      <Route path="/login-voluntary">
        <VoluntariesLogin />
      </Route>

      <Route
        exact
        path="/tracker"
        render={() =>
          (window.location.href =
            "https://crypto-tracker-kappa-eight.vercel.app/")
        }
      />
    </Switch>
  );
};

export default Routes;
