// import React, { useState, useEffect } from 'react';
// import Home from './Home';
// import Login from './Login';
// import SignupForm from './SignupForm';
// import { Routes, Route, Outlet, Link } from "react-router-dom";
// // import '.src/Css/App.css';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/data")
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
    
//     <Routes>
//       <Route>

//       </Route>
//     </Routes>
//   );
// }

// export default App;




import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./Login";
import RecipeSearch from "./RecipeSearch";
import SignupForm from "./SignupForm";

export default function App() {
  return (
    <div>
     

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="recipe" element={<RecipeSearch />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/recipe">Find Recipee</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

