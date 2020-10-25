import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Books from "./components/books";
import BookForm from "./components/bookForm";
import Library from "./components/library";
import Docs from "./components/docs";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={BookForm} />
            <Route
              path="/books"
              render={(props) => <Books {...props} user={this.state.user} />}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/library" component={Library} />
            <Route path="/docs" component={Docs} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/books" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
