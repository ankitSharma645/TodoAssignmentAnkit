/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import HeroSection from './components/HeroSection';
import PlayerStatsTable from './components/PlayerStatsTable';
import Footer from './components/Footer';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogout = () => {
    // Implement logout logic here (clear token from localStorage, reset state, etc.)
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Clear token from localStorage
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <div className="main-container">
      <HeroSection />
      <HowItWorksSection />
      <PlayerStatsTable />
      <FAQSection />
      <Footer />
    </div>
  </>
);

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import TodoList from './components/TodoList'; // Import TodoList
import AddTodoForm from './components/AddTodoForm'; // Import AddTodoForm
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogout = () => {
    // Implement logout logic here (clear token from localStorage, reset state, etc.)
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Clear token from localStorage
  };



  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (

  
  <>
    <div className="main-container">
      <HeroSection />
      <HowItWorksSection />
      <AddTodoForm/>
      <TodoList /> 
     
      <FAQSection></FAQSection>
      <Footer />
    </div>
  </>
);

export default App;
