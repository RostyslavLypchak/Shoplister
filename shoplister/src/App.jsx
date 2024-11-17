import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingListsOverview from "./components/ShoppingListsOverview";
import ShoppingListDetail from "./components/ShoppingListDetail";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Shopping List Manager</h1>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <div className="home-page">
                <h2>Welcome to the Shopping List Manager</h2>
                <button className="btn btn-primary">
                  <Link to="/lists" style={{ color: "white", textDecoration: "none" }}>
                    Open App
                  </Link>
                </button>
              </div>
            }
          />
          {/* Shopping Lists Overview Route */}
          <Route path="/lists" element={<ShoppingListsOverview />} />
          {/* Individual Shopping List Route */}
          <Route path="/lists/:id" element={<ShoppingListDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
