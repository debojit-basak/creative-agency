import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Order from './Components/Order';
import Yourcourse from './Components/Yourcourse';
import YourReview from './Components/YourReview';
import ServiceList from './Components/ServiceList';
import AddServices from './Components/AddServices';
import MakeAdmin from './Components/MakeAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/yourcourse">
            <Yourcourse />
          </PrivateRoute>
          <PrivateRoute path="/yourreview">
            <YourReview />
          </PrivateRoute>
          <PrivateRoute path="/serviceslist">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/addservices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
