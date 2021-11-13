import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import SignUp from './pages/SignIN/SignUp/SignUp';
import SignIN from './pages/SignIN/SignIN/SignIN';
import AuthProvider from './Context/AuthProvider';
import DashboardDrawer from './pages/Dashboard/DashboardDrawer/DashboardDrawer';
import Products from './pages/Products/Products/Products';
import Order from './pages/Products/Order/Order';
import PrivateRoute from './pages/SignIN/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/explore">
              <Products />
            </Route>
            <PrivateRoute path="/order/:id">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashboardDrawer />
            </PrivateRoute>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIN />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
