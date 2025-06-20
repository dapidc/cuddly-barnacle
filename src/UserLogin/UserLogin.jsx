import React from "react";
// Import additional necessary modules.
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom";
import LoginForm from './LoginForm'

export default function UserLogin() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/detail">
                    <UserDetailPage />
                </Route>
                
                <Route path="/login">
                    <LoginPage />
                </Route>
                
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

// Implement the HomePage component.
function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <div>
          <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

// Implement the LoginPage component.
function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}

// Implement the UserDetailPage component.
function UserDetailPage() {
  // Retrieve email and password information
  // from query parameters and display it.
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  
  const email = searchParams.get('email')
  const password = searchParams.get('password')
  
  if (!email || !password) {
    return <Redirect to="/login" />
  }
  
  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to="login">Logout</Link>
    </div>
  );
}