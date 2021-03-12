import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
      <Header />
        <Wrapper>
        
          <Route  path="/" component={Search} />
  
          <Route  path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
